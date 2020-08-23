import * as React from 'react'
import { mixins, Html } from '../styles'
import styled from 'styled-components'

const FormContext = React.createContext({})

export function useForm() {
  return React.useContext(FormContext)
}

export declare namespace Form {

  export type Props = mixins.container & {
    [key: string]: any
  } & {
    loading?: boolean
    onSubmit?: any
    onSuccess?: any,
    onError?: any
  } & React.PropsWithRef<{
    ref?: React.Ref<HTMLFormElement>
  }>

}

export type Form = React.FC<Form.Props> & {
  as?: React.FC<any>
  hook?: (props: any) => any
  register?: (Cmp: React.FC<any>) => void
}

const waitform = new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 100);
})


export const Form: Form = React.forwardRef((props, ref) => {
  if (Form.hook === null) {
    throw waitform
  }

  const handleSubmit = React.useCallback(async (data: any, ...args: any[]) => {
    try {
      const result = await props.onSubmit?.call(null, data, ...args)
      props.onSuccess?.call(null, result, ...args)
    } catch (e) {
      props.onError?.call(null, e, ...args)
    } 
  }, [])

  const form = Form.hook({
    ...props,
    onSubmit: handleSubmit
  })
  React.useImperativeHandle(ref, () => form.ref)

  return (
    <FormContext.Provider value={form.context}>
      {React.createElement(form.as || Form.as, {
        ...form.props,
        noValidate: true
      }, props.children)}
    </FormContext.Provider>
  )
})

Form.as = Html.Form
Form.hook = null

Form.register = (Cmp: React.FC<any>, hook: (props: any) => any = null) => {
  if (Cmp) {
    Form.as = styled(Cmp)`
      ${mixins.container}
    `
  }
  Form.hook = hook
}
