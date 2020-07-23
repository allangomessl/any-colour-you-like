import React from 'react'
import { Col, Row } from '../Flex'
import styled from 'styled-components'
import { ScreenHeader } from './Screen.Header'
import { useSlot } from '../rp'
import { Button } from '../Action'
import { Form } from '../Form'

export declare namespace Screen {
  export type Props = Col.Props & {
    title?: string
  }
}
export type Screen = React.FC<Screen.Props> & {
  Header?: ScreenHeader
}

export const Screen: Screen = React.forwardRef((props, ref) => {

  const HeaderSlot = useSlot('header', props.children, ScreenHeader)

  return (
    <Wrapper border='2' relative {...props} ref={ref}>
      <Close size='3' to='..' circle Icon={IconClose} color='red'>x</Close>
      <HeaderSlot title={props.title} />
      <Row fill>
        {props.children}
      </Row>
    </Wrapper>
  )
})

const Wrapper = styled(Col)`
  border-radius: 8px;
`

const Close = styled(Button)`
  position: absolute !important;
  z-index: 99;
  border: none;
  box-shadow: none;
`

const IconClose = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="-400 -400 1800 1800" enableBackground="new 0 0 1000 1000" {...props}>
    <g><path d="M759.3,923.1L76.9,240.7c-52.8-52.8-52.8-138.3,0-191.1l0,0c52.8-52.8,138.3-52.8,191.1,0L950.4,732c52.8,52.8,52.8,138.3,0,191.1l0,0C897.7,975.9,812.1,975.9,759.3,923.1z"/><path d="M49.6,759.3L732,76.9c52.8-52.8,138.3-52.8,191.1,0l0,0c52.8,52.8,52.8,138.3,0,191.1L240.7,950.4c-52.8,52.8-138.3,52.8-191.1,0l0,0C-3.2,897.7-3.2,812.1,49.6,759.3z"/></g>
  </svg>
)