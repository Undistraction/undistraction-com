// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

import FeatherIcon from 'feather-icons-react'

interface ResumeLinkProps {
  href: string
  label: string
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function ResumeLink({ href, label }: ResumeLinkProps) {
  return (
    <a
      className="relative flex max-w-72 items-center justify-center gap-1 p-3 text-center font-bold transition ease-in after:absolute after:inset-0 after:rounded-lg after:border after:border-gray-700 after:transition-all after:ease-in after:content-[''] hover:bg-gray-900 hover:text-rose-500"
      href={href}
      target="_blank"
    >
      <span className="relative top-[-1.5px] text-gray-400">
        <FeatherIcon
          icon="file"
          size="16"
        />
      </span>
      <span>{label}</span>
    </a>
  )
}
