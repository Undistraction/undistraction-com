import { map } from 'ramda'
import CopyLink from '../prose/CopyLink/CopyLink'
import { FeatherIconName } from 'feather-icons-react'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface ContactDetailsProps {
  links: { href: string; label: string; icon: FeatherIconName }[]
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function ContactDetails({ links }: ContactDetailsProps) {
  return (
    <nav className="flex flex-col gap-1">
      {map(
        ({ href, label, icon }) => (
          <CopyLink
            key={href}
            href={href}
            label={label}
            icon={icon}
          />
        ),
        links
      )}
    </nav>
  )
}
