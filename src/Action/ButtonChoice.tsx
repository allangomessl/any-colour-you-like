import React from 'react'
import styled from 'styled-components'
import { Row } from '../Flex'
import { Button } from './Button'

export declare namespace ButtonChoice {

  export type Props = Button.Props & {
    ref?: any
  } & {
    ref?: React.Ref<HTMLDivElement>
    selected?: any
  }

}

export type ButtonChoice = React.FC<ButtonChoice.Props>

export const ButtonChoice: ButtonChoice = React.forwardRef<HTMLDivElement, ButtonChoice.Props>(({ children, ...props }, ref) => {

  const normChildren =  React.Children.map(children, (child: any) => {
    if (child.key == props.selected) {
      return React.cloneElement(child as any, {
        ...props,
        color: 'primary'
      })
    }
    return React.cloneElement(child as any, props)
  })

  return (
    <Wrapper ref={ref}>
      {normChildren}
    </Wrapper>
  )
})


const Wrapper = styled(Row)<ButtonChoice.Props>`

  & > [role=button] {
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 1px;
    border-right-width: 1px;
    box-shadow: none;
    border-radius: 0;
    margin: 0;
  }

  & > [role=button]:first-of-type {
    border-left-width: 2px !important; 
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & > [role=button]:last-of-type {
    border-right-width: 2px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

`