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
      className="group relative flex max-w-72 items-center justify-center gap-1 p-3 text-center font-bold transition ease-in after:absolute after:inset-0 after:rounded-lg after:border after:border-gray-800 after:transition-all after:ease-in after:content-[''] hover:text-rose-500 hover:after:border-rose-500"
      href={href}
      target="_blank"
    >
      <span className="relative top-[-1.5px] text-gray-400 transition ease-in group-hover:text-rose-500">
        <FeatherIcon
          icon="file"
          size="16"
        />
      </span>
      <span>{label}</span>
    </a>
  )
}
