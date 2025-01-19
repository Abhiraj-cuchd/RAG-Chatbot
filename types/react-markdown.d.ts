declare module 'react-markdown' {
    import React from 'react'

    export interface ReactMarkdownOptions {
      children: string
      linkTarget?: string | ((href: string, children: React.ReactNode, title?: string) => string)
      // Add other options as needed
    }

    export default function ReactMarkdown(props: ReactMarkdownOptions): JSX.Element
  }
