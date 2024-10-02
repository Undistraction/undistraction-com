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
    <div className="flex min-h-screen flex-col gap-6 px-4 sm:px-6 md:gap-9 md:px-8 xl:gap-12">
      {children}
    </div>
  )
}
