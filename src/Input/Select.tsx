import React, { useRef, KeyboardEvent, useImperativeHandle, useLayoutEffect } from 'react'
import { useCallback } from 'react'
import { List } from '../Collection'
import { Item } from '../Item'
import styled from 'styled-components'
import { useSlot, Slot, useProps } from '../rp'
import { InputText } from './Text'

export declare namespace InputSelect {
  export type Props = InputText.Props & {
    items: any[]
  }
}

export type InputSelect = React.FC<InputSelect.Props>

export const InputSelect: InputSelect = React.forwardRef((props, ref) => {

  const inputEl = useRef<HTMLInputElement>()
  const searchEl = useRef<HTMLInputElement>()
  useImperativeHandle(ref, () => inputEl.current)

  const InputSlot = useSlot('input', props.children, 'input')
  const ItemSlot = useSlot('item', props.children, Item.Text)

  useLayoutEffect(() => {
    if (inputEl?.current?.value) {
      searchEl.current.value = inputEl?.current?.value
    }
  }, [inputEl?.current?.value])

  const handleItemSelect = useCallback((item) => {
    inputEl.current.value = item
    searchEl.current.value = item
  }, [])

  const handleInputKeyUp = useCallback((ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.nativeEvent.code === 'Backspace') {
      inputEl.current.value = null
      searchEl.current.value = ''
    }
  }, [])

  const { list, search } = useProps(props, {
    list: ['items', 'role', 'fill'],
    search: ['label']
  })

  return (
    <>
      <WrappedList {...list} searchRef={searchEl} dropdown fill={false}>
        <Slot slot='search' {...search} onKeyDown={handleInputKeyUp} />
        <ItemSlot.Forward onClick={handleItemSelect} />
        {props.children}
      </WrappedList>
      <InputSlot.Render hidden ref={inputEl} name={props.name} />
    </>
  )
})

InputSelect.defaultProps = {
  role: 'input-select'
}

const WrappedList = styled(List)`
  border-radius: 0px 0px 11px 11px;
`
