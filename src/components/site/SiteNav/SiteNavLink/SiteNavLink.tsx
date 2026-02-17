import cx from 'classnames'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface SiteNavLinkProps {
  href: string
  label: string
  target?: string
  isActive?: boolean
  download?: string
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function name({
  href,
  label,
  target = undefined,
  isActive = false,
  download,
}: SiteNavLinkProps) {
  return (
    <a
      className={cx({
        'font-title text-white transition-colors duration-500 ease-in-out md:text-xl':
          true,
        'cursor-default underline decoration-rose-500 underline-offset-[3px]':
          isActive,
        'hover:text-rose-500': !isActive,
      })}
      href={href}
      target={target}
      download={download}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  )
}
