import * as React from 'react'
import { Html } from '../styles'

export declare namespace Col {
  export type Props = Html.Div
}

export type Col = React.FC<Html.Div>

export const Col: Col = React.forwardRef((props, ref) => (
  <Html.Div ref={ref} role={props.role} dir='col' {...props} />
))
