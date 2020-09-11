import * as React from 'react'
import { List as UIList } from 'paintbox'
import { Command } from '@mediatr/core'
import { useHandleList, useSearch } from '@mediatr/react'
import { render } from '../tags'
import { Model } from '@mediatr/data'

export declare namespace List {

  export type Props<T=any> = Omit<UIList.Props<T>, 'search'> & {
    Model?: Pick<Model.Crud<T>, 'list' | 'search'>
    list?: Model.List,
    params?: any,
    search?: ((query: string) => any) | string[] | Model.Search
  }
}

export type List = React.FC<List.Props>

export const List: List = (props) => {
  const command = props.list || props.Model.list
  const list = useHandleList(command, props.params || {})
  let search = props.search
  if (search instanceof Command) {
    search = useSearch(search).handle
  }
  if (!search && props.Model?.search instanceof Command) {
    search = useSearch(props.Model.search).handle
  }
  const Item = render.item.of(command)

  return (
    <UIList items={list.data} {...props} search={search as any}>
      <UIList.Item as={Item} />
    </UIList>
  )
}
