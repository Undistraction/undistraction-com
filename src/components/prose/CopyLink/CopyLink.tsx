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
      className="text-gray-50-500 font-bold no-underline transition-colors duration-500 ease-in-out hover:text-yellow-300 hover:decoration-gray-300"
      href={href}
    >
      {label}
    </a>
  )
}
