import * as React from 'react'
import { InputText } from './Text'
import moment, { Moment } from 'moment'
import { Row } from '../Flex'
import { mixins } from '../styles'
import { useProps } from '../rp'

const dateUnits = ['day', 'month', 'year']

export declare namespace InputDate {
  export type Type = 'date' | 'time' | 'datetime'  

  export type Props = InputText.Props & {
    type?: InputDate.Type
    maskDate?: string
    maskTime?: string
  }
}
export type InputDate = React.FC<InputDate.Props>

export const InputDate: InputDate = React.forwardRef((props, ref) => {
  const dateEl = React.useRef<HTMLInputElement>()
  const timeEl = React.useRef<HTMLInputElement>()
  const inputEl = React.useRef<HTMLInputElement>()
  React.useImperativeHandle(ref, () => inputEl.current)

  const delta = React.useRef(0)
  const incs = React.useRef([])
  const value = React.useRef<Moment>() 

  const { name } = props

  const masks = {
    date: props.maskDate || '99/99/2999',
    time: props.maskTime || '29:69'
  }

  const clearMemory = React.useCallback(() => {
    incs.current = []
    delta.current = 0
  }, [])

  const setValue = React.useCallback((date: Moment, type: InputDate.Type = null) => {
    let newValue = value.current || moment()

    if (date) {
      switch (type) {
        case 'date': newValue = newValue.set({ year: date.year(), month: date.month(), date: date.date() }); break;
        case 'time': newValue = newValue.set({ hour: date.hour(), minute: date.minute() }); break;
        case 'datetime': newValue = date; break;
      }
      dateEl.current.value = newValue.format('L')
      timeEl.current.value = newValue.format('HH:mm')
    } else if (type == 'time') {
      newValue = newValue.set({ hour: 0, minute: 0 })
      timeEl.current.value = ''
    } else {
      dateEl.current.value = ''
      timeEl.current.value = ''
      newValue = null
    }

    value.current = newValue
    inputEl.current.value = newValue?.toISOString() || null
  }, [clearMemory])

  React.useEffect(() => {
    if (inputEl?.current?.value) {
      setValue(moment(inputEl?.current?.value), 'datetime')
    }
  }, [inputEl?.current?.value])

  const onFocus = React.useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    clearMemory()
  }, [clearMemory])

  const onKeyDown = React.useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    const element = ev.currentTarget
    const value = element.value
    const code = ev.nativeEvent.code
    const key = ev.key

    const type = element === dateEl.current ? 'date' : 'time'
    const mask = masks[type]
    const maskKey = mask[value.length]

    const hasSelection = element.selectionStart !== element.selectionEnd

    if (/Tab/.test(code) || ev.ctrlKey || ev.metaKey || maskKey == key) {
      return
    }

    //não deixa o usurio digitar mais nada apos acabar
    if (value.length === mask.length && !hasSelection) {
      ev.preventDefault()
    }

    if (/Digit/.test(code)) {
      if (hasSelection) {
        setValue(null, type)
      }
      delta.current = parseInt(delta.current + key)
    }

    if (type == 'date' && /ArrowDown|ArrowUp/.test(code) && delta.current) {
      if (incs.current.includes(code)) {
        incs.current.length < 3 && incs.current.push(code)
      } else {
        incs.current = [code]
      }

      const op = /ArrowDown/.test(code) ? -1 : 1
      setValue(moment().add(dateUnits[incs.current.length - 1] as any, delta.current * op), 'date')
    }

    if (type == 'date' && /ArrowLeft|ArrowRight/.test(code) && delta.current) {

      switch (code) {
        case 'ArrowLeft': var monthDelta = delta.current < moment().date() ? 0 : -1; break
        case 'ArrowRight': monthDelta = delta.current > moment().date() ? 0 : 1; break
      }

      setValue(moment().set({ month: moment().month() + monthDelta, date: delta.current }), 'date')
    }

    if (/Backspace/.test(code)) {
      clearMemory()
      setValue(null, type)
    }

    if (/Key|Arrow|Backspace/.test(code)) {
      ev.preventDefault()
      return
    }

  }, [setValue])

  const onKeyUp = React.useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    const element = ev.currentTarget
    const value = element.value
    const type = element === dateEl.current ? 'date' : 'time'
    const mask = masks[type]
    const maskKey = mask[value.length]

    if (maskKey && !parseInt(maskKey)) {
      element.value += maskKey
    }

  }, [])

  const onBlur = React.useCallback((ev: React.FocusEvent<HTMLInputElement>) => {
    const element = ev.currentTarget
    const type = element === dateEl.current ? 'date' : 'time'

    clearMemory()
    if (type == 'date' && !inputEl.current.value && dateEl.current.value) {
      const [date, month, year] = element.value.match(/\d+/g).map(Number)
      setValue(moment({ year, 
        month: month && month - 1, 
        date: date === 0 ? undefined : date
      }), 'date')
    }

    if (type == 'time' && timeEl.current.value) {
      const [hour, minute] = timeEl.current.value.match(/\d+/g).map(Number)
      setValue(moment({ hour, minute }), 'time')
    }
  }, [])

  const { wrapper, input } = useProps(props, {
    wrapper: mixins.element.props,
    input: ['onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'name']
  })
  const { dateEv, timeEv } = useProps({ onKeyDown, onKeyUp, onFocus, onBlur }, {
    dateEv: ['onBlur', 'onFocus', 'onKeyDown', 'onKeyUp'],
    timeEv: ['onBlur', 'onFocus', 'onKeyDown', 'onKeyUp']
  })

  return (
    <Row role={name ? 'field-date' : 'input-date'} {...wrapper}>
      <InputText grow={0.6} padding='r0' ref={dateEl} label={props.label || 'Data'} {...dateEv} />
      <InputText grow={0.4} padding='l1' ref={timeEl} label='' {...timeEv} />
      <input hidden ref={inputEl} {...input} />
    </Row>
  )
})
