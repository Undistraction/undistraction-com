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
        'decoration-gray-300 hover:underline': true,
        underline: isActive,
      })}
      href={href}
      target={target}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  )
}
