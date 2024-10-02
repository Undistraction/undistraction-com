import SiteNav from '../SiteNav'
import SiteBrandingLink from './SiteBrandingLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteHeader() {
  return (
    <header className="flex flex-row justify-between py-4 align-middle md:py-6">
      <SiteBrandingLink />
      <SiteNav />
    </header>
  )
}
