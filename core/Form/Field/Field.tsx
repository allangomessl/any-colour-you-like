import * as React from 'react'
import { useForm } from '../Form'

export type Field = React.FC<any> & {
  hook?: (props: any, ctx: any) => any
}

export const Field: Field = (props: any) => {
  const formCtx = useForm()
  const fieldProps = Field.hook(props, formCtx)

  return (
    <props.as {...fieldProps} />
  )
}

Field.hook = null
