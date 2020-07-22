import { useRef, useEffect } from 'react'
import { Form } from '../Form/Form'
import { Field } from '../Form/Field'
import * as lib from 'unform'

Form.hook = (props) => {
  return {
    component: !props.path && lib.Form,
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
