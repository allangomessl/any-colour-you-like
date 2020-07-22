import React from 'react'
import { Html } from "../styles"
import { Col } from '../Flex'

export declare namespace Scroller {
  export type Props = Col.Props & {
  }
}
export type Scroller = React.FC<Scroller.Props>

export const Scroller: Scroller = React.forwardRef((props, ref) => {
  return (
    <Html.Div absolute scrollable>
      <Col ref={ref} {...props} />
    </Html.Div>
  )
})
Scroller.defaultProps = {
  role: 'scroller'
}
