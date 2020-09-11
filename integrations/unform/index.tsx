import { useRef, useEffect } from 'react'
import { Form, Field, Html } from 'paintbox'
import * as lib from 'unform'

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

  const { fieldName, defaultValue, registerField } = lib.useField(name);
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
