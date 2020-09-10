import * as React from 'react'
import { Screen, Slot, useSlot, Button, useProps, mixins } from '@universe-ui/core'
import { Form } from '../collections/Form'
import { SaveOutline } from '@styled-icons/evaicons-outline/SaveOutline'

export declare namespace DetailScreen {

  export type Props = Screen.Props & Form.Props & {
    Model: any
  }

}

export type DetailScreen = React.FC<DetailScreen.Props>

export const DetailScreen: DetailScreen = (props) => {
  const SlotHeader = useSlot('header', props.children, Screen.Header)

  const { screen, form } = useProps(props, {
    screen: [...mixins.container.props],
    form: ['onSubmit', 'onSuccess', 'onError', 'children']
  })

  return (
    <Screen {...screen}>
      <SlotHeader.Forward gap={4}>
        <Button circle Icon={SaveOutline} color='blue' />
      </SlotHeader.Forward>
      <Form {...form} onSubmit={props.Model.save} fill />
    </Screen>
  )
}
