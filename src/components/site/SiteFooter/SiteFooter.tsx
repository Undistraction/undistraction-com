// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default function SiteFooter() {
  return (
    <footer className="space-y-3 p-6 pt-16 text-center text-sm text-gray-400">
      <p>© Pedr Browne 2020–{new Date().getFullYear()}</p>
      <span className="text-lg">U</span>
    </footer>
  )
}
