// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface PullQuoteProps {
  quote: string
  citation: string
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function PullQuote({ quote, citation }: PullQuoteProps) {
  return (
    <blockquote
      className="relative max-w-[420px] space-y-3 pl-6 text-lg/7 after:absolute after:bottom-2 after:left-0 after:top-1 after:border-l-2 after:border-gray-400 after:content-[''] md:pl-0 md:after:-left-6"
      aria-label="Pull quote"
    >
      <span className="italic">{quote}</span>
      <cite
        className="font-quote block text-base not-italic text-gray-400"
        aria-label="Citation"
      >
        {citation}
      </cite>
    </blockquote>
  )
}
