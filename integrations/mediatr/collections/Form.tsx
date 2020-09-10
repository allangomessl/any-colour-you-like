import * as React from 'react'
import { Form as UIForm } from '@universe-ui/core'
import { useCommand } from '@mediatr/react'
import { Model } from '@mediatr/data'

export declare namespace Form {

  export type Props = UIForm.Props & {
    Model?: Pick<Model.Crud<any>, 'save'>
    onSubmit?: Model.Save
  }

}

export type Form = React.FC<Form.Props>

export const Form: Form = React.forwardRef(({ onSubmit, ...props }) => {
  const command = useCommand((onSubmit || props.Model.save) as any)

  return (
    <UIForm loading={command.loading} onSubmit={command.handle} {...props} />
  )
})