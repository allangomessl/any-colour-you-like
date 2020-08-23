import * as React from 'react'
import styled from 'styled-components'
import { element, container, clear } from './mixins.css'
import * as styles from './styles.css'

export type Div = Partial<container & React.HTMLAttributes<HTMLDivElement>> & {
  ref?: React.Ref<HTMLDivElement>
}

export const Div = styled.div<container>`
  ${clear}
  ${container}
`

export type Input = React.PropsWithRef<element> & React.InputHTMLAttributes<HTMLInputElement>
export const Input = styled.input<Input>`
  ${clear};
  background: transparent;
  display: block;
  border-bottom-width: 3px;
  min-height: 38px;
  font-size: 1.5em;
  width: 100%;
  padding: 0px 8px;

  &:focus {
    border-color: ${props => props.theme.colors.focused};
  }

  ${element}
`

export type Button = element & React.ButtonHTMLAttributes<HTMLButtonElement>
export const Button = styled.button<Button>`
  ${clear};
  ${styles.button};
`

export type A = React.PropsWithRef<container> & React.AnchorHTMLAttributes<HTMLAnchorElement>
export const A = styled.a<A>`
  ${styles.a}
  ${container}
`

export type Span = React.PropsWithRef<element> & React.HTMLAttributes<HTMLSpanElement>
export const Span = styled.span<Span>`
  ${element}
`

export type Form = React.PropsWithRef<element> & React.HTMLAttributes<HTMLFormElement>
export const Form = styled.form`
  ${container}
`


// --theme-color: ${p => p.theme.pallete[p.color] || p.color}

// @keyframes showtext {
//   from {opacity: 0}
//   to {opacity: 1}
// }

// cursor: pointer;


// color: #333;
// border-radius: 4px;
// font-weight: 600;

// border-width: 2px;
// border-color: ${p => p.color};

// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: space-around;

// line-height: 1em;
// font-size: 1em;
// padding: 0.5em;

// ${p => p.circle && css`
//   & > span {
//     display: ${p.circle && 'none'};
//     opacity: 0;
//   }

//   &:hover {
//     z-index: 99;
//     background: var(--theme-color);
//     color: white;
//     transform: rotate(360deg);
//     transition-duration: 0.2s;
//     transition-timing-function: ease-in-out;
//     transition-property: transform background-color color;

//     & > span {
//       animation-name: showtext;
//       animation-delay: 0.2s;
//       animation-duration: 0.2s;
//       animation-fill-mode: forwards;
      
//       /* transition-delay: 0.5s;
//       transition-duration: 0.4s;
//       transition-timing-function: ease-in-out;
//       transition-property: display; */

//       display: block;
//       position: absolute;
//       background: var(--theme-color);
//       border: 2px solid var(--theme-color);
//       top: -2px;
//       left: calc(2em - 4px);
//       border-left: 0 !important;
//       line-height: 1em;
//       padding: 0.5em;
//       border-top-right-radius: 1em;
//       border-bottom-right-radius: 1em;

//       left: 1em;
//       z-index: 99;
//       padding-left: 1em;
//     }

//     & > i, svg {
//       z-index: 100! important;
//     }
//   }    

// `}

// &:hover {
//   background: var(--theme-color);
//   color: white;
// }

// ${element}
// & > i, svg {
//   color: inherit;
//   max-width: 1em;
//   max-height: 1em;
//   min-width: 1em;
//   min-height: 1em;
//   font-size: 1.2em;
//   margin: -0.0834em;
// }


