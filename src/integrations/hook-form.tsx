import { Form, useForm } from '../Form/Form'
import { Field } from '../Form/Field'
import * as lib from 'react-hook-form'

Form.hook = (props) => {
  const { path, initialData, rest } = props

  const parent = useForm() as any
  
  let { handleSubmit, register } = lib.useForm({
    defaultValues: initialData,
    ...rest
  })

  const submit = handleSubmit(props.onSubmit)

  if (path) {
    register = parent.register as any
  }

  return {
    props: {
      onSubmit: submit,
      ...rest
    },
    context: {
      path: path,
      register
    },
    ref: {
      submit
    }
  }
}

Field.hook = (props: any, ctx: any) => {
  const name = ctx.path ? `${ctx.path}.${props.name}` : props.name

  return {
    ...props,
    ref: ctx.register,
    name
  }
}
