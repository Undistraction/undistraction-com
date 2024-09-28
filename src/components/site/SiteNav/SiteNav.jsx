'use client'

import { usePathname } from 'next/navigation'
import SiteNavLink from './SiteNavLink'

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------

const LINKS = [
  { href: '/about', label: 'About' },
  {
    href: 'https://github.com/undistraction',
    label: 'Github',
    target: '_blank',
  },
  {
    href: 'https://www.linkedin.com/in/pedr-browne/details/recommendations/?detailScreenTabIndex=0',
    label: 'Recommendations',
    target: '_blank',
  },
]

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------
export default function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-row space-x-3 md:text-xl">
      {LINKS.map((link) => {
        return (
          <SiteNavLink
            key={link.href}
            {...link}
            isActive={pathname === link.href}
          />
        )
      })}
    </nav>
  )
}
