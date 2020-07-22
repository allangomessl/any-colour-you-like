import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Flex/Box'

export declare namespace Avatar {

  export type Props = Box.Props & {
    icon?: string
    imageUrl?: string
    checked?: boolean
  }
}

export type Avatar = React.FC<Avatar.Props>

export const Avatar: Avatar = React.forwardRef((props, ref) => (
  <Wrapper ref={ref} circle border='1' h='50px' w='50px' className={`fas ${props.icon}`} {...props} />
))

const Wrapper = styled(Box)`
  ${p => p.checked && css`background: orange`};
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(p: Avatar.Props) => p.imageUrl});

  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: ${p => p.color};
`
