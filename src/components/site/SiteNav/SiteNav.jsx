'use client'

import { usePathname } from 'next/navigation'
import SiteNavLink from './SiteNavLink'

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------

const LINKS = [
  {
    href: '/pdf/Pedr-Browne-Software-Engineer-Résumé.v4.pdf',
    label: 'Résumé',
    target: '_blank',
  },
  {
    href: 'https://www.linkedin.com/in/pedrb/details/recommendations/',
    label: 'Recommendations',
    target: '_blank',
  },
  { href: '/about', label: 'About' },
]

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------
export default function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="flex w-full flex-row justify-center gap-3 border-y border-y-gray-800 px-4 py-2 md:px-8 md:py-4">
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
