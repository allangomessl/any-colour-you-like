import React, { useCallback, useRef, KeyboardEvent, useState, useMemo, useEffect, useLayoutEffect, useImperativeHandle } from 'react'
import { Col, Box } from '../Flex'
import { Item } from '../Item'
import styled, { css } from 'styled-components'
import { InputText } from '../Input/Text'
import { Slot, useSlot, useProps } from '../rp'
import { mixins } from '../styles'
import { ItemText } from '../Item/Text'
import Fuse from 'fuse.js'
import { useDebounceState } from '../rp'

export declare namespace List {

  export type Props<T=any> = mixins.element & {
    items?: T[], 
    search?: (query: string) => any | string[],
    more?: () => void,
    dropdown?: boolean
    fill?: boolean
    searchRef?: any
    children?: any
    fieldKey?: keyof T
    searchFields?: Array<keyof T>
  }

}
export type List<T=any> = React.FC<List.Props<T>> & {
  Item?: Slot<Item>
}

export const List: List = React.forwardRef((props, ref) => {
  const [query, setQuery] = useDebounceState(500)
  const [stateData, setStateData] = useState(props.items)
  const [focused, setFocused] = useState(0)
  const [showList, setShowList] = useState(!props.dropdown)

  const { wrapper, search, ul } = useProps(props, {
    wrapper: [...mixins.element.props, 'dropdown', 'role'],
    search: ['dropdown'],
    ul: ['dropdown']
  })

  // const stateData = useRef<any[]>(props.items)
  const localSearch = useCallback((query: string) => {
    const results = new Fuse(props.items || [], { keys: props.search ?? [] as any }).search(query)
    return results.map(r => r.item)
  }, [props.items, props.search])

  useLayoutEffect(() => {
    if (query) {
      const finder = props.search?.call ? props.search : localSearch
      const results = finder.call(null, query)
      if (results.then) {
        results.then(setStateData)
      } else {
        setStateData(results)
      }
    } else {
      setStateData(props.items)
    }
  }, [setStateData, query, props.items])

  const setCurrentIndex = useCallback((index: number) => {
    const normIndex = Math.min(stateData.length - 1, Math.max(0, index))
    if (normIndex != focused) {
      setFocused(normIndex)
    }
    return normIndex
  }, [setFocused, focused, stateData])

  useEffect(() => {
    setCurrentIndex(focused)
  }, [setCurrentIndex, stateData])

  const ulEl = useRef<HTMLDivElement>()
  useImperativeHandle(ref, () => ulEl.current)

  const SearchSlot = useSlot('search', props.children, InputText)
  const ItemSlot = useSlot('item', props.children, ItemText)

  ul.onScroll = useCallback((ev) => {
    const el = ev.target
    const finish = el.scrollHeight - el.clientHeight
    if (ev.target.scrollTop == finish) {
      props.more?.call(null)
    }
  }, [props.more])

  search.onChange = useCallback((value: string, ev: KeyboardEvent<HTMLInputElement>) => {
    if (query !== value) {
      setQuery(value)
    }
    SearchSlot.props?.onChange?.call(null, value, ev)
  }, [query, setQuery])

  search.onKeyDown = useCallback((ev: KeyboardEvent<HTMLInputElement>) => {
    const code = ev.nativeEvent.code

    if (/Tab/.test(code) || ev.ctrlKey || ev.metaKey) {
      props.dropdown && setShowList(false)
      return
    }

    if (/Arrow/.test(code)) {
      var index = focused
      switch (code) {
        case 'ArrowUp': index -= 1; break
        case 'ArrowDown': index += 1; break
      }
      index = setCurrentIndex(index)

      const ul = ulEl?.current
      const li = ul?.children[index] as HTMLDivElement

      if (ul && li) {
        const scrollTrigger = ul.clientHeight * 0.5
        if (code === 'ArrowDown' && li.offsetTop > scrollTrigger) {
          ul.scrollTop = li.offsetTop - scrollTrigger
        } else if (code === 'ArrowUp') {
          ul.scrollTop = li.offsetTop - scrollTrigger
        }
      }
    }

    if (/Enter/.test(code)) {
      const li = ulEl?.current?.children[focused] as HTMLDivElement
      li?.click()
      ev.preventDefault()
      ev.stopPropagation()
    }

    if (props.dropdown && /Key|Arrow|Page|Backspace/.test(code)) {
      setShowList(true)
    }

    SearchSlot?.props?.onKeyUp?.call(null, ev)

    if (/ArrowUp|ArrowDown/.test(code)) {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }, [focused, setCurrentIndex])


  search.onBlur = useCallback(() => {
    setTimeout(() => {
      props.dropdown && setShowList(false)
    }, 150)
  }, [setShowList])

  search.onFocus = useCallback(() => {
    props.dropdown && setShowList(true)
  }, [setShowList])

  const items = useMemo(() => {
    return stateData.map((item: any, index: number) => {
      const handleClick = (ev: any) => {
        setFocused(index)
        ItemSlot?.props?.onClick?.call(null, item, index, ev)
        props.dropdown && setShowList(false)
      }
      return React.createElement(ItemSlot, {
        data: item,
        index,
        onClick: handleClick,
        key: (ItemSlot.props.fkey ? item[ItemSlot.props.fkey] : index) || item,
        focused: focused == index,
      })
    })
  }, [stateData, query, ItemSlot, focused, setFocused, setShowList])

  return (
    <Wrapper {...wrapper}>
      <SearchSlot ref={props.searchRef} {...search} />
      {showList && (<UL ref={ulEl} absolute scrollable {...ul}>
        {items}
      </UL>)}
    </Wrapper>
  )
})
List.defaultProps = {
  role: 'list',
  dropdown: false,
  items: [],
  fill: true
}

const Wrapper = styled(Col)`
  position: relative;
`

const UL = styled(Box)<List.Props>`
  ${p => p.dropdown && css`z-index: 999`};
  background: ${p => p.theme.colors.background};

  position: absolute;

  ${p => !p.dropdown && css`
    top: 65px;
    height: calc(100% - 65px);
  `}

  ${p => p.dropdown && css`
    top: 100%;
    max-height: 15rem;
    left: 16px;
    margin-top: -16px;
    width: calc(100% - (16px * 2));
    z-index: 9999999;
    height: auto;

    border-width: 1px;
    border-radius: 0 0 4px 4px;
  `}
`
