import React from 'react'
import { Item, Avatar } from "universe-ui"

export const LanguageItem = ({ data, ...props }) => {

  return (
    <Item {...props}>
      <Avatar imageUrl={data.image} />
      {data.name}
    </Item>
  )
}