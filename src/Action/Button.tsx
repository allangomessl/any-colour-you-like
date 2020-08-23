import * as React from 'react'
import { Html, styles, mixins } from '../styles'
import { Link } from './Link'
import styled, { css } from 'styled-components'
import { useProps } from '../rp'
import { ButtonChoice } from './ButtonChoice'

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export declare namespace Button {

  export type Props = Html.Button & {
    inverted?: boolean
    to?: any
    href?: any
    ref?: React.Ref<HTMLButtonElement>
    Icon?: any
  }

}

export type Button = React.FC<Button.Props> & {
  Choice?: ButtonChoice
}

export const Button: Button = React.forwardRef<HTMLButtonElement, Button.Props>((props, ref) => {
  const { Icon, ...rest } = props

  const { icon, text } = useProps(props, {
    icon: ['inverted'],
    text: ['circle']
  })

  const Wrapper = (props.to || props.href ) ? WrapperLink : WrapperButton as any
  const textIcon = props.Icon && (props.children && !props.circle)

  const ButtonIcon = React.useCallback(Icon ? styled(Icon)`
    font-size: 1em;
    height: 1em;
    width: 1em;
  ` : () => null, [Icon]) 
  
  return (
    <Wrapper role='button' ref={ref} {...props} relative textIcon={textIcon}>
      <ButtonIcon {...icon} />
      {props.children && <Text {...text}>{props.children}</Text>}
    </Wrapper>
  )
})
Button.defaultProps = {
  tabIndex: -1,
  size: '5'
}
Button.Choice = ButtonChoice


const Text = styled(Html.Span)`
  flex: 1;
  text-align: center;
  font-size: 0.5em;
  margin: 0.5em;

  ${p => p.circle && css`
    @keyframes showtext {
      from {opacity: 0}
      to {opacity: 1}
    }

    animation-name: showtext;
    animation-delay: 0.2s;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;

    display: ${p.circle && 'none'};
    opacity: 0;

    &:hover {
      display: block;
      position: absolute;
      background: var(--color);
      z-index: 99;
      border-width: 2px;
      border-color: var(--color);
      top: -2px;
      left: calc(2em - 4px);
      border-left: 0 !important;
      line-height: 1em;
      padding: 0.5em;
      border-top-right-radius: 1em;
      border-bottom-right-radius: 1em;
      left: 1em;
      padding-left: 1em;
    }

  `}
`

const wrapper = css`

  ${(p: any) => p.circle && css`
    width: calc(1em * var(--size));
    &:hover {
      transform: rotate(360deg);
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-property: transform background-color color;
    }
  `}
`

const WrapperLink = styled(Link)`
  ${mixins.clear};
  ${styles.button}
  ${wrapper}
  ${mixins.element}
`

const WrapperButton = styled(Html.Button)`
  ${wrapper}
  ${mixins.element}
`
