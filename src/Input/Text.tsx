import React, { useLayoutEffect, useCallback, useRef, useImperativeHandle } from 'react'
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
    state?: any 
  }

}

export type InputText = React.FC<InputText.Props>

export const InputText: InputText = React.forwardRef((props, ref) => {
  const { label, wRef, name, onChange } = props

  const inputEl = useRef<HTMLInputElement>()
  useImperativeHandle(ref, () => inputEl.current)

  const InputSlot = useSlot('input', props.children, Html.Input)

  useLayoutEffect(() => {
    
  }, [props.value])

  const handleChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.call(null, ev.currentTarget.value, ev)
  }, [onChange])

  const { wrapper, input } = useProps(props, {
    wrapper: mixins.element.props,
    input: ['onKeyDown', 'onKeyUp', 'onBlur', 'onFocus', 'onEnter', 'name', 'value']
  })
  return (
    <Wrapper ref={wRef} role={name ? 'field-text' : 'input-text' } {...wrapper}>
      <InputSlot required ref={inputEl} autoComplete='off' {...input} onChange={handleChange} />
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
