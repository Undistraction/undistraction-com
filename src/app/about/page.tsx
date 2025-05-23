import { Metadata } from 'next'
import AboutCopy from '../../../content/md/aboutCopy.mdx'

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

interface ProseProps {
  children: React.ReactNode
}

const Prose = ({ children }: ProseProps) => {
  return (
    <div className="prose prose-invert prose-h1:text-xl sm:text-lg md:max-w-full md:columns-2 md:text-xl xl:columns-3 [&>:first-child]:font-title [&>:first-child]:font-semibold">
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
    <div className="mx-auto md:grid md:max-w-[990px] xl:max-w-[1200px]">
      <Prose>
        <AboutCopy />
      </Prose>
    </div>
  )
}
