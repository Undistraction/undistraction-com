// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface CopyLinkProps {
  href: string
  label: string
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function CopyLink({ href, label }: CopyLinkProps) {
  return (
    <a
      className="font-bold decoration-gray-300 hover:underline"
      href={href}
    >
      {label}
    </a>
  )
}
