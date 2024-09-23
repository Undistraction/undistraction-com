import { Metadata } from "next"

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Undistraction: About page",
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col px-8 ">
      <header className="py-6">
        <a href="/">Undistraction</a>
      </header>
      <div className="w-full max-w-[600px] mx-auto space-y-3 flex-grow">
        <header>
          <h1 className="font-bold m-0">About me</h1>
        </header>
        <p className="text-lg">
          I’m a software developer with 20 years experience working across web
          development and design, with the last nine years focussed on the
          front-end within the React ecosystem. Prior to this, I spent a
          significant amount of time working across the Rails stack, designing,
          building and styling components, sites and front-ends.
        </p>
        <p className="text-lg">
          I’m comfortable working with JavaScript or TypeScript, and styling
          with vanilla CSS through to Styled Components and Tailwind. I’ve
          worked with both REST and GraphQL APIs, and more recently I’ve been
          playing with NextJS and HTMX. I am a big fan of testing and I’ve used
          a variety of testing tooling over the years, including vitest, Jest,
          Cypress and Playwright.
        </p>
        <p className="text-lg">
          Most recently I spent almost six years working for a digital-health
          startup, architecting and building multiple admin and
          service-user-facing front-ends. Prior to that I worked as a contractor
          for a wide variety of clients, from health data platforms and branding
          consultancies to high-street retailers and educational institutions.
          I’m very comfortable working remotely, autonomously or as part of a
          team, I’m adaptable, and can pick up new technologies and working
          practices quickly.
        </p>
        <p className="text-lg">
          I’ll always advocate for well specified and carefully considered code,
          but experience has made me pragmatic and I understand that the needs
          of a business can dictate a variety of approaches to development. I
          love writing code, but also solving UX and design problems. I greatly
          enjoy both learning and teaching, and have mentored a number of junior
          developers over the years.
        </p>
        <p className="text-lg">
          I favour a more functional approach to code, with data and functions
          kept separate, but with a very pragmatic slant, emphasising code that
          is well structured, easy to read and easy to reason about. Somewhat
          unusually I also enjoy writing specifications and documentation.
        </p>
        <p className="text-lg">
          I’ve contributed to a number of open-source projects over the years
          including Ramda-adjunct and Gatsby, and co-edited ‘SurviveJS – Webpack
          5’, the official guide to using Webpack.
        </p>
        <p className="text-lg">
          Outside of work, I love the outdoors, especially long-distance hiking
          and camping in wild country. I also play accoustic, electric and bass
          guitar, and spend a lot of time making and listening to music.
        </p>
      </div>
      <footer className="p-6 pt-16 space-y-3 text-sm text-center text-gray-400">
        <p>© Pedr Browne 2020–{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
