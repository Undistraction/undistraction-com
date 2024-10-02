// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteFooter() {
  return (
    <footer className="relative space-y-3 px-6 py-12 text-center text-sm text-gray-400 after:absolute after:inset-x-0 after:top-0 after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-gray-600 after:to-transparent after:content-['']">
      <p>© Pedr Browne 2020–{new Date().getFullYear()}</p>
      <span className="font-title text-lg font-semibold">U</span>
    </footer>
  )
}
