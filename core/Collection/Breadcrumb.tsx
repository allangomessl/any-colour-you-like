import * as React from 'react'
import { Slot } from '../rp'
import { Row } from '../Flex'
import styled from 'styled-components'
import { Link } from '../Action'
import { features } from '../styles'

export declare namespace Breadcrumb {

  export type Item = Link.Props & {
    label?: string
    divider?: 'arrow' | 'bar'
  }

  export type Props = Row.Props & {
    divider?: 'arrow' | 'bar'
  }

}

export type Breadcrumb = React.FC<Breadcrumb.Props> & {
  Item?: React.FC<Breadcrumb.Item>
  Bar?: React.FC<any>
  Arrow?: React.FC<any>
  Divider?: React.FC<any>
}

export const Breadcrumb: Breadcrumb = React.forwardRef(({ children, ...props }, ref) => {

  const withDivider = React.Children.map(children, (child, idx) => {
    return idx === 0 ? child : (
      <>
        {props.divider && <Breadcrumb.Divider icon={props.divider} />}
        {child}
      </>
    )
  })

  return (
    <Wrapper ref={ref} {...props}>
      {withDivider}
    </Wrapper>
  )
})

Breadcrumb.defaultProps = {
  role: 'Breadcrumb'
}

Breadcrumb.Item = Slot.of('item', (props: Breadcrumb.Item) => (
  <Link {...props}>{props.label}</Link>
))

const Wrapper = styled(Row)`
  ${features.size};
  align-items: center;
  line-height: calc(1em * var(--size));
  height: calc(1em * var(--size));
  font-size: calc(1em * var(--size));
  padding: 1em 0;
`

Breadcrumb.Divider = (props: any) => {

  const Icon = styles[props.icon ?? 'arrow'] as any

  return (
    <svg fontSize='1em' width='1em' viewBox="0 0 24 24">
      <Icon />
    </svg>
  )
}

Breadcrumb.Bar = () => (<Breadcrumb.Divider icon='bar' />)

Breadcrumb.Arrow = () => (<Breadcrumb.Divider icon='arrow' />)

const styles = {

  bar: styled.line.attrs({
    x1: '8', y1: '24',
    x2: '16', y2: '0'
  })`
    stroke: ${p => p.theme.colors.border};
    stroke-width: 25%;
  `,

  arrow: styled.path.attrs({
    d: 'M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z'
  })`
    fill: ${p => p.theme.colors.border};
  `
}
