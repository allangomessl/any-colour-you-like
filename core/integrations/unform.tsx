import { useRef, useEffect } from 'react'
import { Form } from '../Form/Form'
import { Field } from '../Form/Field'
import * as lib from 'unform'
import { Html } from '../styles'

Form.register(lib.Form)

Form.hook = (props) => {
  return {
    as: props.path ? Html.Form : Form.as,
    props,
    context: {
      path: props.path
    }
  }
}

Field.hook = (props: any, ctx: any) => {
  const inputRef = useRef(null);

  const name = ctx.path ? `${ctx.path}.${props.name}` : props.name

  const { fieldName, defaultValue, registerField, error } = lib.useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return {
    ...props,
    ref: inputRef,
    defaultValue,
    name,
  }
}
