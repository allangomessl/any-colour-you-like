import React from 'react'
import { Input } from '../../Input'
import { Field } from './Field'

export const FieldSelect = (props) => {
  return (
    <Field as={Input.Select} {...props} />
  )
}
