import React from 'react'
import { Item } from './Item'

export declare namespace ItemText {
  export type Props = Item.Props
}

export type ItemText = React.FC<ItemText.Props>

export const ItemText: ItemText = React.forwardRef<any, ItemText.Props>((props, ref) => {
  return (
    <Item h='40px' align='center' {...props} ref={ref}>
      <strong>{props.data}</strong>
    </Item>
  )
})
