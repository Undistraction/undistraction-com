// components/Layout.tsx
import { ReactNode } from 'react'
import Site from '../components/site/Site'
import SiteHeader from '../components/site/SiteHeader'
import SiteBody from '../components/site/SiteBody'
import SiteFooter from '../components/site/SiteFooter'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface SiteLayoutProps {
  children: ReactNode
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div>
      <Site>
        <SiteHeader />
        <SiteBody>{children}</SiteBody>
        <SiteFooter />
      </Site>
    </div>
  )
}
