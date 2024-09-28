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
    <div className="mx-auto max-w-[600px] grid-cols-[1fr] gap-x-[50px] space-y-12 md:grid md:space-y-0">
      <div className="prose prose-invert md:text-xl [&>:first-child]:font-semibold">
        {children}
      </div>
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
    <Markdown>
      <AboutCopy />
    </Markdown>
  )
}
