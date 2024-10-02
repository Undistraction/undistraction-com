'use client'

import cx from 'classnames'
import { usePathname } from 'next/navigation'

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export default function SiteBrandingLink() {
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <a
      className={cx({
        'font-title text-xl text-white transition-colors duration-500 ease-in-out md:text-2xl': true,
        'cursor-default': isActive,
        'hover:text-yellow-300': !isActive,
      })}
      href="/"
      aria-label="Undistraction Home"
    >
      Undistraction
    </a>
  )
}
