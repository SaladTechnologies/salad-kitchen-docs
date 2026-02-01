import { Callout } from 'fumadocs-ui/components/callout'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
  }
}
