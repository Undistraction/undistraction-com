import type { MDXComponents } from 'mdx/types'
import CopyLink from './src/components/prose/CopyLink/CopyLink'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

// Define the MDX components that are available to the MDX content.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href, ...rest }) => (
      <CopyLink
        label={children as string}
        href={href as string}
        {...rest}
      />
    ),
  }
}
