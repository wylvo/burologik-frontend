import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import z from "zod"

const api = import.meta.env.VITE_API_ENDPOINT

export const newsletterSubscribe = async ({
  firstName,
  email,
  captchaToken: token,
}: NewsletterSubscribe) => {
  const { data } = await axios.post<{
    success: boolean
    message: string
  }>(
    `${api}/newsletter/subscribe`,
    { firstName, email, token },
    { headers: { "Content-Type": "application/json" } },
  )

  return data
}

export type NewsletterSubscribeResponse = ReturnType<typeof newsletterSubscribe>

export type NewsletterSubscribe = z.infer<typeof subscribeSchema>

export const subscribeSchema = z.object({
  email: z.email({ error: "Veuillez insérer un courriel valide" }),
  firstName: z
    .string()
    .min(2, { error: "Votre nom doit comporter au moins 2 caractères" })
    .max(50, {
      error: "Votre nom doit ne peut pas excéder plus de 50 caractères",
    }),
  captchaToken: z.string(),
})

export function useNewsletterSubscribe() {
  const {
    mutate: subscribe,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({
      firstName,
      email,
      captchaToken,
    }: NewsletterSubscribe): NewsletterSubscribeResponse =>
      newsletterSubscribe({ firstName, email, captchaToken }),
  })

  return { subscribe, isPending, error }
}
