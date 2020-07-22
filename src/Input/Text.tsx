import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Col } from '../Flex'
import { mixins, Html, styles } from '../styles'
import { useSlot, useProps } from '../rp'

export declare namespace InputText {

  export type Props = mixins.element & {
    ref?: React.Ref<HTMLInputElement>
    name?: string
    wRef?: React.Ref<HTMLDivElement>
    label?: string
    onKeyDown?: any
    onKeyUp?: any
    onBlur?: any
    onFocus?: any
    onEnter?: any,
    value?: any,
    onChange?: any
  }

}

export type InputText = React.FC<InputText.Props>

export const InputText: InputText = React.forwardRef((props, ref) => {
  const { label, wRef, name } = props

  const InputSlot = useSlot('input', props.children, Html.Input)

  useLayoutEffect(() => {
    const input = { value: props.value }
    props.onChange?.call(null, { currentTarget: input, target: input  } )
  }, [props.value])

  const { wrapper, input } = useProps(props, {
    wrapper: mixins.element.props,
    input: ['onKeyDown', 'onKeyUp', 'onBlur', 'onFocus', 'onEnter', 'name', 'value', 'onChange']
  })
  return (
    <Wrapper ref={wRef} role={name ? 'field-text' : 'input-text' } {...wrapper}>
      <InputSlot required ref={ref} autoComplete='off' {...input} />
      {label && <Label>{label}</Label>}
      <Message />
    </Wrapper>
  )
})

const Wrapper = styled(Col)`
  padding: 16px;
`

const Label = styled.label`
  ${mixins.clear};
  ${styles.label};
`

const Message = styled.span`
  display: block;
`
