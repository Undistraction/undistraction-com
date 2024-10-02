import { map } from 'ramda'
import CopyLink from '../prose/CopyLink/CopyLink'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface ContactDetailsProps {
  links: { href: string; label: string }[]
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function ContactDetails({ links }: ContactDetailsProps) {
  return (
    <nav className="flex flex-col space-y-1">
      {map(
        ({ href, label }) => (
          <CopyLink
            key={href}
            href={href}
            label={label}
          />
        ),
        links
      )}
    </nav>
  )
}
