import { Metadata } from 'next'
import React from 'react'
import ResumeLink from '../components/ResumeLink'
import PullQuote from '../components/prose/PullQuote'
import CopyLink from '../components/prose/CopyLink/CopyLink'

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------

const CONTENT = {
  intro: [
    `I’m a software engineer with almost two decades of experience, focussing
      on front-end app development within the React ecosystem, but drawing from
      experience building server-based sites and mobile apps. I write lean,
      well-tested code using the best bits of functional programming while
      keeping the code easy to read and reason-about.`,
    `I’m comfortable collaborating on prototypes with designers, defining
      and refining spec alongside engineers, or discussing features with
      stakeholders. Pragmatic in my approach, adaptable and inquisitive, I find
      the work I do endlessly interesting, and ultimately very\u00A0satisfying.`,
    `If I wasn’t writing code for a living. I’d be doing it for\u00A0fun.`,
  ],
  pullquote: {
    quote: `In over 15 years of experience, I can count on one hand the people I
        would be 100% confident in recommending, but Pedr’s always first on my
        list. His creative eye, attention to detail in design, and his ability
        to craft readable and reliable code is second-to-none. Always passionate
        about his work and a good communicator, he would be a valuable asset to\u00A0any\u00A0company.`,
    citation: 'Simon Bailey, Distinguished Engineer, TriNetX\u00A0Inc',
  },
  resumeLink: {
    href: `/pdf/Pedr-Browne-résumé.v2.pdf`,
    label: `Pedr Browne Résumé`,
  },
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Undistraction: Home page',
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[990px] grid-cols-[3fr,1.7fr] gap-x-16 space-y-8 md:grid md:space-y-0">
      <div className="space-y-8">
        <div className="prose prose-invert sm:text-lg md:text-xl">
          <p className="font-semibold">{CONTENT.intro[0]}</p>
          <p>{CONTENT.intro[1]}</p>
          <p>{CONTENT.intro[2]}</p>
        </div>
        <ResumeLink {...CONTENT.resumeLink} />
      </div>{' '}
      <div className="space-y-8 md:pt-7">
        <PullQuote {...CONTENT.pullquote} />
        <p>
          See my other recommendations on{' '}
          <CopyLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/pedr-browne/details/recommendations"
          />
          .
        </p>
      </div>{' '}
    </div>
  )
}
