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
        'font-title text-white transition-colors duration-500 ease-in-out md:text-xl':
          true,
        underline: isActive,
        'cursor-default': isActive,
        'hover:text-rose-500': !isActive,
      })}
      href={href}
      target={target}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  )
}
