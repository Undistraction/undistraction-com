import { Metadata } from 'next'
import React from 'react'
import ResumeLink from '../components/ResumeLink'
import PullQuote from '../components/prose/PullQuote'
import CopyLink from '../components/prose/CopyLink/CopyLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Undistraction: Home page',
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[940px] grid-cols-[3fr,2fr] gap-x-[35px] space-y-12 md:grid md:space-y-0">
      <div className="space-y-8">
        <div className="prose prose-invert md:text-xl">
          <p className="font-semibold">
            I’m a software engineer with almost two decades of experience,
            focussing on front-end app development within the React ecosystem,
            but drawing from experience building server-based sites and mobile
            apps. I write lean, well-tested code using the best bits of
            functional programming while keeping the code easy to read and
            reason-about.
          </p>
          <p>
            I’m comfortable collaborating on prototypes and with designers,
            defining and refining spec alongside engineers, or discussing
            features with stakeholders. Pragmatic in my approach, adaptable and
            inquisitive, I find the work I do endlessly interesting, and
            ultimately very satisfying. If I wasn’t writing code for a living.
            I’d be doing it for fun.
          </p>
        </div>
        <ResumeLink />
      </div>{' '}
      <div className="space-y-8">
        <PullQuote />
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
