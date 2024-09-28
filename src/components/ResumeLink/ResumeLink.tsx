// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface ResumeLinkProps {
  href: string,
  label: string,
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function ResumeLink({href, label}:ResumeLinkProps) {
  return (
    <a
      className="relative block max-w-72 p-3 text-center font-bold after:absolute after:inset-0 after:rounded-lg after:border after:border-gray-100 after:content-[''] hover:after:border-2 hover:after:border-gray-400"
      href={href}
      target="_blank"
    >
      {label}
    </a>
  )
}
