import React from 'react'
import { Row } from '../Flex'
import { Box } from '../Flex/Box'
import { useSlot } from '../rp/lib'

export declare namespace ScreenHeader {
  export type Props = Box.Props & {
    title?: string
  }
}
export type ScreenHeader = React.FC<ScreenHeader.Props>

export const ScreenHeader: ScreenHeader = React.forwardRef((props, ref) => {
  return (
    <Row ref={ref} role='screen-header' minH='50px' border='b1' padding='l8 r4' align='center' {...props}>
      <Box fill>
        <strong>{props.title}</strong>
      </Box>
      <Row>
        {props.children}
      </Row>
    </Row>
  )
})
