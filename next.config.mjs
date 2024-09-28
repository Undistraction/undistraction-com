import createMDX from '@next/mdx'

const nextConfig = {
  // Include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
