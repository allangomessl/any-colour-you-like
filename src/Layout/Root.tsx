import * as React from 'react'
import { Row } from '../Flex'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { Theme, base } from '../themes'
import { I18n, langs } from '../I18n'

export declare namespace Root {
  export type Props = Row.Props & {
    ref?: React.Ref<HTMLDivElement>
    i18n?: keyof typeof langs | {},
    theme?: Theme
  }
}

export type Root = React.FC<Root.Props>

export const Root: Root = React.forwardRef(({ theme, children, i18n, ...props }, ref) => {

  return (
    <ThemeProvider theme={theme}>
      <I18n value={langs[i18n as any] || i18n}>
        <Wrapper ref={ref} {...props}>{children}</Wrapper>
      </I18n>
    </ThemeProvider>
  )
})
Root.defaultProps = {
  theme: base,
  i18n: 'pt-br',
  role: 'root',
  w: '100vw',
  h: '100vh'
}

export const Wrapper = styled(Row)`

  body {
    margin: 0;
  }

  font-size: ${props => props.theme.typograpy.fontSize};
  * { outline: none; };
`
