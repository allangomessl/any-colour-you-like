import { addParameters } from '@storybook/react'
import React from 'react'
import { Root, Row } from 'universe-ui'
import theme from './theme'
import { addons } from '@storybook/addons'

addons.setConfig({})

export const parameters = {
  theme
};



const CustomStory = ({ children, args, ...props }) => {
  const normChildren = children.call ? children.call(null, args) : children
  return (
    <Root dir={!props.dir || true} w='100%' h='100%' {...props}>
      {normChildren}
    </Root>
  )
}

CustomStory.defaultProps = {
  dir: 'col'
}


addParameters({
  options: {
    theme
  },
  docs: {
    components: {
      Story: CustomStory,
    },
  }
})

