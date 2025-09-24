import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  className?: string
}

function Section({ children, className }: SectionProps) {
  return <section className={cn("p-8 lg:p-32", className)}>{children}</section>
}

export default Section
