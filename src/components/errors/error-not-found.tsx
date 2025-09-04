import { Card, CardContent } from "../ui/shadcn/card"

function ErrorNotFound() {
  return (
    <div className="flex items-center justify-center bg-muted min-h-svh">
      <Card>
        <CardContent className="text-lg lg:text-4xl">
          404 | Non trouvable
        </CardContent>
      </Card>
    </div>
  )
}

export default ErrorNotFound
