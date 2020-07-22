import React from "react"
import { Html } from "../styles"

export declare namespace Box {
  export type Props = Html.Div & {
    as?: any
  }
}

export type Box = React.FC<Box.Props>

export const Box: Box = React.forwardRef((props, ref) => {

  const Wrapper = props?.as ?? Html.Div

  return (
    <Wrapper ref={ref} relative {...props}>
      {props.children}
    </Wrapper>
  )
})
