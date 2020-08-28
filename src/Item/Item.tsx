import React from 'react'
import { Row } from '../Flex'
import styled, { css } from 'styled-components'
import { ItemText } from './Text'
import { Link } from '../Action'

export declare namespace Item {

  export type Props<T=any> = Link.Props & {
    ref?: any
    focused?: boolean
    data?: T
    children?: any
  }
}

export type Item<T=any> = React.FC<Item.Props<T>> & {
  Text?: typeof ItemText
}

export const Item: Item = styled(Row).attrs((props) => {
  return  {
    as: Link, noStyle: true, dir: 'row', gap: 8, relative: true,
    padding: '2', align: 'center', ...props
  }
})`

  ${(p: Item.Props) => p.focused && css`
    border-style: solid;
    border-width: 1px;
    border-color: ${p => p.theme.colors.focused}
  `};

  &:hover {
    background: orange;
  };

`
