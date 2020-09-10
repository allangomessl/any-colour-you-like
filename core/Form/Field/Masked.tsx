import * as React from 'react'
import { Input } from '../../Input'
import { Field } from './Field'

export const FieldMasked = (props: any) => {
  return (
    <Field as={Input.Masked} {...props} />
  )
}
