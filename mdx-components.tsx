import type { MDXComponents } from "mdx/types"

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

// Define the MDX components that are available to the MDX content.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
