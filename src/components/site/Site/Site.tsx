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
    <div className="flex min-h-screen flex-col px-4 sm:px-6 md:px-8">
      {children}
    </div>
  )
}
