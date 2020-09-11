import * as React from 'react'
import { Item, Avatar } from "paintbox"

export const LanguageItem = ({ data, ...props }) => {

  return (
    <Item {...props}>
      <Avatar imageUrl={data.image} />
      {data.name}
    </Item>
  )
}