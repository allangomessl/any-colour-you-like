import React from 'react'
import { Item, Avatar } from "universe-ui"

const images = {
  'Java': 'https://i.pinimg.com/originals/bb/72/c8/bb72c84af959c4689e0bae3bfed496f5.png',
  'Kotlin': 'https://cdn.iconscout.com/icon/free/png-256/kotlin-283155.png'
}

export const LanguageItem = ({ data, ...props }) => {


  return (
    <Item {...props}>
      <Avatar imageUrl={images[data]} />
      {data}
    </Item>
  )
}