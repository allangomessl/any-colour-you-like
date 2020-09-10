import * as React from 'react'
import { Html } from '../styles'

export declare namespace Row {
  export type Props = Html.Div
}

export type Row = React.FC<Html.Div>

export const Row: Row = React.forwardRef((props, ref) => (
  <Html.Div ref={ref} dir='row' {...props} />
))
