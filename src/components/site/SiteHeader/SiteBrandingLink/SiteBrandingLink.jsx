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
        'flex flex-col items-center font-title text-white transition-colors duration-500 ease-in-out md:text-2xl': true,
        'cursor-default': isActive,
        'hover:text-rose-500': !isActive,
      })}
      href="/"
      aria-label="Undistraction Home"
    >
      <div className="text-xl leading-5">Pedr Browne</div>
      <div className="text-lg text-gray-400">Software Engineer</div>
    </a>
  )
}
