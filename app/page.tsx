import { Metadata } from "next"
import Head from "next/head"
import React, { Fragment } from "react"

const Nav = () => {
  return (
    <nav className="flex flex-row space-x-3">
      <a className="hover:underline decoration-gray-300" href="/about">
        About
      </a>
      <a
        className="hover:underline decoration-gray-300"
        href="https://github.com/undistraction"
      >
        Github
      </a>
      <a
        className="hover:underline decoration-gray-300"
        href="https://www.linkedin.com/in/pedr-browne/details/recommendations/?detailScreenTabIndex=0"
      >
        Recommendations
      </a>
    </nav>
  )
}

const LogoLink = () => <a href="/">Undistraction</a>

const Header = () => {
  return (
    <header className="justify-between py-6 flex flex-row align-middle">
      <LogoLink />
      <Nav />
    </header>
  )
}

const ResumeLink = () => (
  <a
    className="relative font-bold text-center block p-3 after:border-gray-100 after:border after:rounded-lg after:content-[''] after:inset-0 max-w-72 mx-auto after:absolute hover:after:border-2 hover:after:border-gray-400"
    href="/pdf/Pedr-Browne-résumé.v2.pdf"
  >
    Pedr Browne Rėsumė
  </a>
)

const Content = () => (
  <Fragment>
    <ResumeLink />

    <blockquote className="after:border-gray-300 after:border-l-2 relative after:content-[''] after:absolute after:inset-y-2 after:-left-6 text-base/7 space-y-3">
      <span>
        In over 20 years of experience, I can count on one hand the people I
        would be 100% confident in recommending, but Pedr’s always first on my
        list. His creative eye, attention to detail in design, and his ability
        to craft readable and reliable code is second-to-none. Always passionate
        about his work and a good communicator, he would be a valuable asset to
        any company.
      </span>
      <cite className="block text-gray-400 test-sm not-italic">
        Simon Bailey, Distinguished Engineer, TriNetX
      </cite>
    </blockquote>
    <p>
      You can read about me on{" "}
      <a
        className="hover:underline decoration-gray-300 font-bold"
        href="/about"
      >
        the about page
      </a>
      , see my code on{" "}
      <a
        className="hover:underline decoration-gray-300 font-bold"
        href="https://github.com/undistraction"
      >
        Github
      </a>
      , or take a look at my recommendations on{" "}
      <a
        className="hover:underline decoration-gray-300 font-bold"
        href="https://www.linkedin.com/in/pedr-browne/details/recommendations/?detailScreenTabIndex=0"
      >
        LinkedIn
      </a>
      .
    </p>
  </Fragment>
)

interface MainContentProps {
  children: React.ReactNode
}

const MainContent = ({ children }: MainContentProps) => {
  return (
    <div className="w-full space-y-5 flex-grow ">
      <div className="max-w-[600px] space-y-5 mx-auto">
        <main className="space-y-12">{children}</main>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="p-6 pt-16 space-y-3 text-sm text-center text-gray-400">
      <p>© Pedr Browne 2020–{new Date().getFullYear()}</p>
    </footer>
  )
}

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Undistraction: Home page",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-8">
      <Header />
      <MainContent>
        <Content />
      </MainContent>
      <Footer />
    </div>
  )
}
