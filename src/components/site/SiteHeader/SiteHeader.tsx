import SiteNav from '../SiteNav'
import SiteBrandingLink from './SiteBrandingLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteHeader() {
  return (
    <header className="relative flex flex-col items-center gap-2 from-transparent pt-4 align-middle md:gap-4 md:pt-8">
      <SiteBrandingLink />
      <SiteNav />
    </header>
  )
}
