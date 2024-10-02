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
      className="relative max-w-[420px] space-y-1 text-lg/7"
      aria-label="Pull quote"
    >
      <span className="relative italic">
        <span className="absolute -left-[10px] text-gray-400 md:-left-[35px] md:text-6xl">
          “
        </span>
        {quote}
        <span className="absolute right-[-10px] text-gray-400 md:-bottom-[32px] md:-right-[22px] md:text-6xl">
          ”
        </span>
      </span>
      <cite
        className="font-quote block text-base not-italic text-gray-400"
        aria-label="Citation"
      >
        {citation}
      </cite>
    </blockquote>
  )
}
