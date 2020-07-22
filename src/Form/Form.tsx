import React, { createContext, useContext, useImperativeHandle, useState, useEffect, useCallback } from 'react'

const FormContext = createContext({})

export function useForm() {
  return useContext(FormContext)
}

export declare namespace Form {

  export type Props = {
    loading: boolean
    onSubmit: any
    onSuccess,
    onError
  }

}

export type Form = React.FC<Form.Props> & {
  hook?: (props: any) => any
}

const waitform = new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 100);
})

export const Form: Form = React.forwardRef((hookProps, ref) => {
  if (Form.hook === null) {
    throw waitform
  }

  const hook = Form.hook(hookProps)
  const { props } = hook
  useImperativeHandle(ref, () => hook.ref)

  const handleSubmit = useCallback(async (data: any, ...args: any[]) => {
    try {
      const result = await props.onSubmit?.call(null, data, ...args)
      props.onSuccess?.call(null, result, ...args)
    } catch (e) {
      props.onError?.call(null, e, ...args)
    } 
  }, [])

  const formElement = React.createElement(hook.component || 'form', {
    ...hook.props,
    onSubmit: handleSubmit,
    noValidate: true,
  }, props.children)

  return (
    <FormContext.Provider value={hook.context}>
      {formElement}
    </FormContext.Provider>
  )
})

Form.hook = null

// (props) => {
//   console.error('no form control registered. add react-hook-form to your dependecies')
//   return {}
// }