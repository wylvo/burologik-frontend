import { unsubscribeParamsSchema } from "@/features/newsletter/api/unsubscribe"
import Unsubscribe from "@/features/newsletter/components/unsubscribe"
import { createFileRoute, redirect } from "@tanstack/react-router"
import z from "zod"

export const Route = createFileRoute("/(app)/newsletter/unsubscribe")({
  beforeLoad: ({ search }) => {
    try {
      unsubscribeParamsSchema.parse(search)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw redirect({ to: "/" })
      }
    }
  },
  component: Unsubscribe,
  validateSearch: unsubscribeParamsSchema,
})
