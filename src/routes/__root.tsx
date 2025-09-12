import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router"
import { QueryClient } from "@tanstack/react-query"

import { useValidateLocale } from "@/hooks/useValidateLocale"
import { useLanguageChange } from "@/hooks/useLanguageChange"
import ErrorNotFound from "@/components/errors/error-not-found"
import ErrorFallback from "@/components/errors/error-fallback"
import ToasterDefaults from "@/components/ui/toaster-defaults"

interface RouterContext {
  locale: ReturnType<typeof useValidateLocale>
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        title: "Burologik | À Venir Bientôt",
      },
      {
        name: "description",
        content: "Burologik: Magasiner Des Bureaux Ergonomiques",
      },
      {
        charSet: "UTF-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/icon.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        href: "/icon.png",
      },
    ],
  }),
  component: Root,
  notFoundComponent: ErrorNotFound,
  errorComponent: ErrorFallback,
})

function Root() {
  useLanguageChange()

  return (
    <>
      <HeadContent />
      <Outlet />
      <ToasterDefaults />
    </>
  )
}
