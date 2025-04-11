// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface SiteProps {
  children: React.ReactNode
}
// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function name({ children }: SiteProps) {
  return (
    <div className="flex min-h-screen flex-col gap-6 md:gap-12">{children}</div>
  )
}
