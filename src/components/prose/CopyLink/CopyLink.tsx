import FeatherIcon, { FeatherIconName } from 'feather-icons-react'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface CopyLinkProps {
  href: string
  label: string
  icon?: FeatherIconName
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function CopyLink({ href, label, icon }: CopyLinkProps) {
  return (
    <a
      className="text-gray-50-500 inline-flex items-center gap-1 underline decoration-gray-600 transition-colors duration-500 ease-in-out hover:text-rose-500 hover:decoration-rose-800"
      href={href}
    >
      {icon && (
        <span className="relative top-[-1.5px] text-gray-400">
          <FeatherIcon
            icon={icon}
            size={16}
          />
        </span>
      )}
      <span>{label}</span>
    </a>
  )
}
