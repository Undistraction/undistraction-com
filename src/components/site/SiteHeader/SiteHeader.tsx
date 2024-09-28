// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

import SiteNav from '../SiteNav'

const SiteBrandingLink = () => (
  <a
    className="md:text-xl"
    href="/"
  >
    Undistraction
  </a>
)

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
