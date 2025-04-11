// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteFooter() {
  return (
    <footer className="relative space-y-3 border-t border-t-gray-800 px-6 py-12 text-center text-sm text-gray-400 sm:px-6 md:px-8">
      <p>
        <span className="relative -top-[1px]">©</span> Pedr Browne 2020–
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
