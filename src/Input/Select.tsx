import * as React from 'react'
import { useCallback } from 'react'
import { List } from '../Collection'
import { Item } from '../Item'
import styled from 'styled-components'
import { useSlot, Slot, useProps } from '../rp'
import { InputText } from './Text'

export declare namespace InputSelect {
  export type Props<T=any> = InputText.Props & {
    items: T[]
    search?: List.Props<T>['search']
    toText?: (item: T) => T
  }
}

export type InputSelect = React.FC<InputSelect.Props>

export const InputSelect: InputSelect = React.forwardRef((props, ref) => {

  const [listDisplay, setListDisplay] = React.useState(false)
  const [value, setValue] = React.useState()

  const listEl = React.useRef<HTMLDivElement>()
  const inputEl = React.useRef<HTMLInputElement>()
  const searchEl = React.useRef<HTMLInputElement>()
  const selectedItemEl = React.useRef<HTMLDivElement>()
  React.useImperativeHandle(ref, () => inputEl.current)

  const InputSlot = useSlot('input', props.children, 'input')
  const ItemSlot = useSlot('item', props.children, Item.Text)

  React.useLayoutEffect(() => {
    if (inputEl?.current?.value) {
      searchEl.current.value = props.toText(inputEl?.current?.value) || ''
    } else {
      searchEl.current.value = ''
    }
  }, [inputEl?.current?.value])

  const handleItemSelect = useCallback((item) => {
    inputEl.current.value = item
    setValue(item)
  }, [])

  const handleInputKeyDown = useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (/Backspace|Delete/.test(ev.nativeEvent.code)) {
      inputEl.current.value = null
      setValue(null)
    }
    if (/Escape/.test(ev.nativeEvent.code)) {
      searchEl.current.blur()
    }

  }, [])

  React.useLayoutEffect(() => {
    if (listDisplay) {
      searchEl?.current?.focus()
    }
  }, [listDisplay])

  const { list, search } = useProps(props, {
    list: ['items', 'role', 'fill', 'search'],
    search: ['label']
  })

  const As = useCallback((props) => {
    return (
      <>
        {props.template && <label>{props.label}</label>}
        {props.template && <ItemSlot.Render ref={selectedItemEl} href='#' data={props.value} {...props} />}
        <InputText ref={searchEl} w={0} style={{ opacity: props.template ? 0 : 1 }} absolute={props.template} {...props} />
      </>
    )
  }, [])

  return (
    <>
      <WrappedList {...list} ref={listEl} dropdown fill={false} onListDisplayed={setListDisplay} onKeyDown={handleInputKeyDown}>
        <Slot slot='search' as={As} {...search} data={value} template={value && !listDisplay} />
        <ItemSlot.Forward onClick={handleItemSelect} />
        {props.children}
      </WrappedList>
      <InputSlot.Render hidden ref={inputEl} name={props.name} />
    </>
  )
})

InputSelect.defaultProps = {
  role: 'input-select',
  toText: (item: any) => item
}

const WrappedList = styled(List)`
  border-radius: 0px 0px 11px 11px;
`
