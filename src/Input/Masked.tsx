import React, { useImperativeHandle, useRef, useLayoutEffect } from 'react'
import { InputText } from './Text'
import IMask from 'imask'
import { useI18n, langs } from '../I18n'

const all: { [p: string]: IMask.AnyMaskedOptionsArray | IMask.AnyMaskedOptions} = {

  'credit-card': {
    mask: '0000 0000 0000 0000',
  },
  'email': {
    mask: /^\S*@?\S*$/,
  },
  'range': {
    mask: Number
  },
}


export declare namespace InputMasked {
  export type Props = InputText.Props & {
    type: keyof typeof all | keyof typeof langs['pt-br']['masks']
    mask?: string
  }
}
export type InputMasked = React.FC<InputMasked.Props>

export const InputMasked: InputMasked = React.forwardRef((props, ref) => {

  const { masks } = useI18n()

  const mask = useRef<IMask.InputMask<IMask.AnyMaskedOptions>>()
  
  const inputEl = useRef<HTMLInputElement>()
  useImperativeHandle(ref, () => inputEl.current)

  useLayoutEffect(() => {
    if (mask.current) {
      mask.current.value = inputEl.current?.value
    }
  }, [inputEl.current?.value])

  useLayoutEffect(() => {
    const options = Object.assign({
      format: true
    } as Partial<IMask.AnyMaskedOptions>, all[props.type] ?? masks[props.type] as any)
    mask.current = IMask(inputEl.current, options)
  }, [])

  return (
    <InputText {...props} ref={inputEl} />
  )
})

