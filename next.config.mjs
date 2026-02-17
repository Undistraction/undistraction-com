import createMDX from '@next/mdx'

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------

const RESUME_VERSION = 8

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------

const nextConfig = {
  // Include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/pdf/Pedr-Browne-Software-Engineer-R%C3%A9sum%C3%A9.pdf',
        destination:
          `/pdf/Pedr-Browne-Software-Engineer-R%C3%A9sum%C3%A9.v${RESUME_VERSION}.pdf`,
        permanent: false,
      },
    ]
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
