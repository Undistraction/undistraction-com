import { Metadata } from 'next'
import AboutCopy from '../../../content/md/aboutCopy.mdx'

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

interface MarkdownProps {
  children: React.ReactNode
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <div className="prose prose-invert prose-h1:text-xl sm:text-lg md:max-w-full md:columns-2 md:text-xl xl:columns-3 [&>:first-child]:font-semibold">
      {children}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Undistraction: About page',
}

export default function About() {
  return (
    <div className="mx-auto grid-cols-[1fr] gap-x-[50px] space-y-12 md:grid md:max-w-[990px] md:space-y-0 xl:max-w-[1200px]">
      <Markdown>
        <AboutCopy />
      </Markdown>
    </div>
  )
}