import cx from 'classnames'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface SiteNavLinkProps {
  href: string
  label: string
  target?: string
  isActive?: boolean
}

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function name({
  href,
  label,
  target = undefined,
  isActive = false,
}: SiteNavLinkProps) {
  return (
    <a
      className={cx({
        'font-title text-white transition-colors duration-500 ease-in-out md:text-2xl':
          true,
        underline: isActive,
        'cursor-default': isActive,
        'hover:text-yellow-300': !isActive,
      })}
      href={href}
      target={target}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  )
}
