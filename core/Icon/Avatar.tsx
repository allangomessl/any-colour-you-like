import * as React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Flex/Box'
import { features } from '../styles'

export declare namespace Avatar {

  export type Props = Box.Props & {
    Icon?: any
    imageUrl?: string
    checked?: boolean
  }
}

export type Avatar = React.FC<Avatar.Props>

export const Avatar: Avatar = React.forwardRef((props, ref) => {
  const { Icon } = props
  
  const AvatarIcon = React.useCallback(Icon ? styled(Icon)`
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    color: var(--color);
  ` : () => null, [Icon]) 
  
  return (
    <Wrapper ref={ref} circle padding='1em' border='1' h='50px' w='50px' {...props}>
      <div style={{ position: 'relative', height: '100%' }}>
        <AvatarIcon />
      </div>
    </Wrapper>
  )
})

const Wrapper = styled(Box)<features.size & any>`
  ${features.color};
  ${features.size};
  ${p => p.checked && css`background: orange`};
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(p: Avatar.Props) => p.imageUrl});
  font-weight: 600;
  line-height: calc(1.2em * var(--size));
  text-align: center;
  text-align: start;
  position: relative;
  min-width: calc(1.2em * var(--size));
  max-width: calc(1.2em * var(--size));
  min-height: calc(1.2em * var(--size));
  max-height: calc(1.2em * var(--size));
  box-sizing: content-box;
  font-size: calc(2.4em * var(--size));
  padding: calc(0.1em * var(--size));
  color: ${p => p.color};
`
