import { CodeBlock } from './CodeBlock'
import { MDXProvider as Provider } from '@mdx-js/react'

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock
}

export function MDXProvider({ children }) {
  return (
    <Provider components={components as any}>
      {children}
    </Provider>
  )
}
