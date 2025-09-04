import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import { RouterProvider } from "@tanstack/react-router"

import { router } from "@/router"
import { useValidateLocale } from "@/hooks/useValidateLocale"
import { defaultLocale } from "@/types/locale"
import "./index.css"

import "@/lib/i18n"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/router"

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function App() {
  const locale = useValidateLocale(defaultLocale)

  return <RouterProvider router={router} context={{ locale }} />
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  )
}
