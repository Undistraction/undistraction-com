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
  console.log(href, isActive)
  return (
    <a
      className={`decoration-gray-300 hover:underline ${isActive && `underline`}`}
      href={href}
      target={target}
    >
      {label}
    </a>
  )
}
