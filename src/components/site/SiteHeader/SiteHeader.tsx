import SiteNav from '../SiteNav'
import SiteBrandingLink from './SiteBrandingLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteHeader() {
  return (
    <header className="relative flex flex-row justify-between py-4 align-middle after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-gradient-to-r after:from-gray-800 after:via-gray-600 after:to-gray-800 after:content-[''] md:py-6">
      <SiteBrandingLink />
      <SiteNav />
    </header>
  )
}
