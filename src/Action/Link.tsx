import * as React from 'react'
import styled from 'styled-components'
import { Html, mixins, styles } from '../styles'

type RouterLink = React.FC<{ to: any }>
var RouterLink: RouterLink = Html.A as any

export declare namespace Link {
  export type Props = Html.A & {
    to?: any
  }
}

export type Link = React.FC<Link.Props> & {
  initialize?: (RouterLink: RouterLink) => void
}

export const Link: Link = React.forwardRef<HTMLAnchorElement, Link.Props>((props, ref) => {
    const Type = props.to ? RouterLink as any : Html.A

    const container = props.dir

    return <Type container={container} ref={ref} {...props} />
})
Link.defaultProps = {
  tabIndex: -1
}

Link.initialize = function initializeRouter(Link: RouterLink) {
  RouterLink = styled(Link)`
    ${styles.a}
    ${mixins.container}
  `
}
