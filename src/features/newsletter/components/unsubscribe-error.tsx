import NewsletterLayout from "@/components/layouts/newsletter-layout"
import type { AxiosError } from "axios"
import type { NewsletterUnsubscribeResponse } from "../api/unsubscribe"

type UnsubscribeErrorProps = {
  error: Error & AxiosError
}

function UnsubscribeError({ error }: UnsubscribeErrorProps) {
  const errorMessage = (
    error?.response?.data as Awaited<NewsletterUnsubscribeResponse>
  )?.message

  return (
    <NewsletterLayout>
      <div className="flex flex-col gap-8 max-w-2xl p-12 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">Une erreur s'est produite</h1>
          <p className="text-muted-foreground text-sm">
            {errorMessage || "Quelque chose s'est mal passé!"}
          </p>
        </div>
      </div>
    </NewsletterLayout>
  )
}

export default UnsubscribeError
