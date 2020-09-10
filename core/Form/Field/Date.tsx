import * as React from 'react'
import { Input } from '../../Input'
import { Field } from './Field'

export const FieldDate = (props: any) => {
  return (
    <Field as={Input.Date} {...props} />
  )
}
