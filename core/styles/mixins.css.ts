import { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components'
import { 
  box, flex, minH, minW, maxH, maxW, h, w, size, color, relative, loading,
  circle, margin, padding, border, corner, bg, fg, attached, absolute, scrollable
} from './features.css'
import { Theme } from '../themes'

type Type<P> = FlattenInterpolation<ThemedStyledProps<element, any>> & {
  props?: Array<keyof P>
}

export const clear = css`
  /* margin: 0;
  padding: 0;
  border: none;
  box-shadow: none;
  border-radius: none;
  outline: none; */

  border-style: solid;
  box-sizing: border-box;
  border-width: 0px;
  box-shadow: none;
  border-radius: 0px;
  outline: none !important;
  border-color: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.foreground};
  font-family: ${props => props.theme.typograpy.fontFamily};
  
  &:focus { outline: none; };
`

export type element = {
  role?: string
  theme?: Theme
} & box & minH & minW & loading & absolute & maxH & color & maxW & h & w & size & circle & margin & padding & border & corner & bg & fg & attached
export const element: Type<element> = css<element>`
  ${box}
  ${absolute}
  ${minH}
  ${minW}
  ${maxH}
  ${maxW}
  ${h}
  ${w}
  ${size}

  ${circle}
  ${margin}
  ${padding}
  ${border}
  ${corner}

  ${bg}
  ${fg}
  ${color}

  ${attached}
  ${loading}
`

element.props = [
  "attached", "bg", "border", 'loading', "fg", "fill", "grow", "h", "margin", 
  "maxH", "maxW", "minH", "minW", 'role', "padding", "size", "w", "color", "absolute"
]

export type container = element & scrollable & relative & flex
export const container: Type<container> = css<container>`
  ${element}
  ${scrollable}
  ${relative}
  ${flex}
`
container.props = [
  ...element.props, 'scrollable', 'relative', 'gap', 'align', 'justify', 'dir', 'grow', 'wrap'
]