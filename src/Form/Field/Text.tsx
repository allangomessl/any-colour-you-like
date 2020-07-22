import React from 'react'
import { Input } from '../../Input'
import { Field } from './Field'

export const FieldText = (props) => {
  return (
    <Field as={Input.Text} {...props} />
  )
}
