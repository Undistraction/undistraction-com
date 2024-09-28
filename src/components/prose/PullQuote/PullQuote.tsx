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
    <blockquote className="relative left-0 max-w-[420px] space-y-3 pl-6 text-lg/7 after:absolute after:-left-0 after:bottom-2 after:top-1 after:border-l-2 after:border-gray-300 after:content-['']">
      <span>{quote}</span>
      <cite className="block text-base not-italic text-gray-400">
        {citation}
      </cite>
    </blockquote>
  )
}
