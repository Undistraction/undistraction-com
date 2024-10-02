// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface SiteBodyProps {
  children: React.ReactNode
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteBody({ children }: SiteBodyProps) {
  return (
    <div className="w-full flex-grow pt-6 md:pt-9 xl:pt-12">
      <main className="w-full space-y-5">{children}</main>
    </div>
  )
}
