import SiteNav from '../SiteNav'
import SiteBrandingLink from './SiteBrandingLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteHeader() {
  return (
    <header className="relative flex flex-col items-center gap-2 from-transparent py-4 align-middle after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-600 after:to-transparent after:content-[''] md:flex-row md:justify-between md:py-6">
      <SiteBrandingLink />
      <SiteNav />
    </header>
  )
}
