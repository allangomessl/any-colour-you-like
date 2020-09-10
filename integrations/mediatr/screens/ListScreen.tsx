import * as React from 'react'
import { Screen, useSlot, Button, useProps, mixins } from '@universe-ui/core'
import { List } from '../collections/List'
import { Plus } from '@styled-icons/boxicons-regular/Plus'
import { Trash } from '@styled-icons/boxicons-regular/Trash'

export declare namespace ListScreen {

  export type Props = Screen.Props & {
    Model: any
  }

}

export type ListScreen = React.FC<ListScreen.Props>

export const ListScreen: ListScreen = (props) => {
  const SlotHeader = useSlot('header', props.children, Screen.Header)

  const { screen, list } = useProps(props, {
    screen: [...mixins.container.props],
    list: ['Model']
  })

  return (
    <Screen {...screen}>
      <SlotHeader.Forward gap={4}>
        <Button circle Icon={Plus} color='blue' />
        <Button circle Icon={Trash} color='red' />
      </SlotHeader.Forward>
      <List {...list} />
    </Screen>
  )
}