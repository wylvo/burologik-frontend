import { Button } from "@/components/ui/shadcn/button"
import { getRouteApi } from "@tanstack/react-router"
import { useNewsletterUnsubscribe } from "../api/unsubscribe"
import NewsletterLayout from "@/components/layouts/newsletter-layout"
import { Loader2Icon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import UnsubscribeError from "./unsubscribe-error"

const route = getRouteApi("/(app)/newsletter/unsubscribe")

function Unsubscribe() {
  const { token } = route.useSearch()
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const { unsubscribe, isPending, error } = useNewsletterUnsubscribe()

  async function handleUnsubscribe() {
    unsubscribe(token, {
      onSuccess: () => {
        toast.success(
          "Vous vous êtes désabonné avec succès de notre infolettre!",
        )
        setIsUnsubscribed(true)
      },
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            "La désabonnement a échoué. Veuillez réessayer ultérieurement.",
          {
            style: {
              color: "var(--destructive)",
            },
          },
        )
        setIsUnsubscribed(false)
      },
    })
  }

  if (error) return <UnsubscribeError error={error} />

  return (
    <NewsletterLayout>
      <div className="flex flex-col gap-8 max-w-2xl p-12 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">
            {isUnsubscribed
              ? "Vous vous êtes désabonné avec succès de notre infolettre"
              : "Voulez-vous vous désabonner ?"}
          </h1>
          {!isUnsubscribed && (
            <p className="text-muted-foreground text-sm">
              Nous cesserons immédiatement de vous envoyer des e-mails si vous
              confirmez.
            </p>
          )}
        </div>
        {!isUnsubscribed && (
          <div>
            <Button
              className="text-md w-[80%]"
              size="lg"
              disabled={isPending}
              onClick={handleUnsubscribe}
            >
              {isPending ? (
                <>
                  <Loader2Icon className="animate-spin" />
                  Désabonnement...
                </>
              ) : (
                "Se désabonner"
              )}
            </Button>
          </div>
        )}
      </div>
    </NewsletterLayout>
  )
}

export default Unsubscribe
