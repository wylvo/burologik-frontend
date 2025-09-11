import { useRef } from "react"
import { getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2Icon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/shadcn/input"
import { Button } from "@/components/ui/shadcn/button"
import ButtonWithIcon from "@/components/ui/button-with-icon"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/shadcn/form"
import {
  subscribeSchema,
  useNewsletterSubscribe,
} from "@/features/newsletter/api/subscribe"

type SubscribeFormFields = z.infer<typeof subscribeSchema>

const route = getRouteApi("/")

const siteKey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_INVISIBLE_SITE_KEY

function NewsletterSubscribeForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { locale } = route.useRouteContext()
  const { subscribe, isPending } = useNewsletterSubscribe()

  const ref = useRef<TurnstileInstance | null>(null)

  const form = useForm<SubscribeFormFields>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      firstName: "",
      captchaToken: "",
    },
  })

  const {
    formState: { errors },
  } = form

  const handleSubmit = async (data: SubscribeFormFields) => {
    const { captchaToken } = data

    if (!captchaToken) {
      toast.error("Erreur! Veuillez réessayer sous peu.", {
        style: {
          color: "var(--destructive)",
        },
      })
      return
    }

    subscribe(data, {
      onSuccess: () => {
        toast.success("Vous vous êtes abonné à notre infolettre avec succès!")
      },
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            "L'abonnement a échoué. Veuillez réessayer plus tard.",
          {
            style: {
              color: "var(--destructive)",
            },
          },
        )
      },
      onSettled: () => {
        // Reset the Turnstile component by changing the key to generate a new challenge
        ref.current?.reset()
        form.reset()
        form.clearErrors()
      },
    })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border border-white/25 bg-white/5 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">
            Restez à l'affût!
          </CardTitle>
          <CardDescription className="text-brand-50">
            Inscrivez-vous à notre infolettre et recevez des nouvelles sur le
            lancement du site, les dernières offres exclusives, des informations
            sur les soldes, les réductions et bien plus encore.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <div className="flex items-center">
                          <FormLabel className="text-brand-50">Nom</FormLabel>
                        </div>
                        <FormControl>
                          <Input
                            className="bg-brand-50 focus-visible:ring-brand-50/85"
                            type="text"
                            disabled={isPending}
                            {...field}
                          />
                        </FormControl>
                        {errors.firstName && (
                          <FormDescription className="text-(--destructive) bg-red-100 px-1.5 rounded-sm justify-self-start">
                            {errors.firstName.message}
                          </FormDescription>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel className="text-brand-50">
                          Courriel
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-brand-50 focus-visible:ring-brand-50/85"
                            autoComplete="email"
                            placeholder="email@example.com"
                            disabled={isPending}
                            {...field}
                          />
                        </FormControl>
                        {errors.email && (
                          <FormDescription className="text-(--destructive) bg-red-100 px-1.5 rounded-sm justify-self-start">
                            {errors.email.message}
                          </FormDescription>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="captchaToken"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <Turnstile
                            ref={ref}
                            onSuccess={(token) => field.onChange(token)}
                            siteKey={siteKey}
                            options={{
                              theme: "dark",
                              language: locale.split("-")[0],
                              size: "flexible",
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {isPending ? (
                    <ButtonWithIcon
                      icon={<Loader2Icon className="animate-spin" />}
                      disabled
                    >
                      Abonnement...
                    </ButtonWithIcon>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full focus-visible:ring-brand-50/75"
                      disabled={isPending}
                    >
                      S'abonner
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <div className="text-brand-50 text-center text-xs px-4 text-[0.65rem]">
          <p>* Nous respectons vos données et votre vie privée.</p>
          <p>Désabonnez-vous à tout moment.</p>
        </div>
      </Card>
    </div>
  )
}

export default NewsletterSubscribeForm
