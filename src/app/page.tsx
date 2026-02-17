import { Metadata } from 'next'
import React from 'react'
import ResumeLink from '../components/ResumeLink'
import PullQuote from '../components/prose/PullQuote'
import CopyLink from '../components/prose/CopyLink/CopyLink'
import ContactDetails from '../components/ContactDetails'
import { FeatherIconName } from 'feather-icons-react'
import MyWorkCopy from '../../content/md/myWorkCopy.mdx'

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------

const CONTENT = {
  intro: {
    title: 'Intro',
    body: [
      `I’m an experienced software engineer, with the last decade focused on front-end app development within the React ecosystem, but drawing from many previous projects building MPAs and mobile apps. I write lean, well-tested code using the best bits of functional programming, while keeping the code easy to read and reason about.`,
      `I’m comfortable collaborating on prototypes with designers, defining
      and refining spec alongside engineers, or brainstorming solutions with
      stakeholders. Pragmatic in my approach, adaptable and inquisitive, I find
      the work I do endlessly interesting, and ultimately very\u00A0satisfying.`,
      `If I wasn’t writing code for a living. I’d be doing it for\u00A0fun.`,
    ],
  },
  pullquote: {
    quote: `In over 15 years of experience, I can count on one hand the people I
        would be 100% confident in recommending, but Pedr’s always first on my
        list. His creative eye, attention to detail in design, and his ability
        to craft readable and reliable code is second-to-none. Always passionate
        about his work and a good communicator, he would be a valuable asset to\u00A0any\u00A0company.`,
    citation: 'Simon Bailey, Distinguished Engineer, TriNetX\u00A0Inc',
  },
  resumeLink: {
    href: `/pdf/Pedr-Browne-Software-Engineer-Résumé.pdf`,
    label: `Résumé`,
  },
  myWork: {
    title: 'My work',
  },
  contactDetails: [
    {
      href: 'mailto:info@undistraction.com',
      label: `info@undistraction.com`,
      icon: 'mail' as FeatherIconName,
    },
    {
      href: 'https://github.com/Undistraction?tab=repositories',
      label: `Github`,
      icon: 'github' as FeatherIconName,
    },
    {
      href: 'https://www.linkedin.com/in/pedrb',
      label: `LinkedIn`,
      icon: 'linkedin' as FeatherIconName,
    },
  ],
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
          <p className="font-title font-semibold tracking-wide">
            {CONTENT.intro.body[0]}
          </p>
          <p>{CONTENT.intro.body[1]}</p>
          <p>{CONTENT.intro.body[2]}</p>
        </div>
        <div className="md:hidden">
          <ResumeLink {...CONTENT.resumeLink} />
        </div>
        <div className="a:decoration-gray-400 prose prose-invert sm:text-lg md:text-xl">
          <h2 className="text-xl">My work</h2>
          <MyWorkCopy />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-8 md:flex-col">
        <div className="hidden md:block">
          <ResumeLink {...CONTENT.resumeLink} />
        </div>
        <ContactDetails links={CONTENT.contactDetails} />
        <div className="flex flex-col gap-4">
          <PullQuote {...CONTENT.pullquote} />
          <p>
            See my other recommendations on{' '}
            <CopyLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/pedrb/details/recommendations/"
            />
            .
          </p>
        </div>
      </div>
    </div>
  )
}
