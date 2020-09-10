import * as React from 'react'
import { Input, Slot } from '@universe-ui/core'
import { Command } from '@mediatr/core'
import { useHandleList, useSearch } from '@mediatr/react
import { render } from '../tags'
import { Model } from '@mediatr/data'

export declare namespace Select {

  export type Props<T=any> = Omit<Input.Select.Props, 'search'> & {
    Model?: Pick<Model.Crud<T>, 'list' | 'search'>,
    list?: Model.List
    params?: any,
    search?: ((query: string) => any) | string[] | Model.Search
  }
}

export type Select = React.FC<Select.Props>

export const Select: Select = (props) => {
  const command = props.list || props.Model.list
  const list = useHandleList(command, props.params)
  let search = props.search
  if (search instanceof Command) {
    search = useSearch(search).handle
  }
  if (!search && props.Model?.search instanceof Command) {
    search = useSearch(props.Model.search).handle
  }
  const Cmp = render.item.of(command)

  return (
    <Input.Select {...props} items={list.data} search={search as any}>
      <Slot slot='item' as={Cmp} />
    </Input.Select>
  )
}
