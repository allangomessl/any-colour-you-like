import { useState, useCallback } from "react"

export function useSelection(keyProp: string) {

  const [selection, setSelection] = useState<any[]>([])
  
  const has = useCallback((data: any) => {
    return selection.includes(data[keyProp])
  }, [selection, keyProp])
  
  const toggle = useCallback((data) => {
    if (has(data)) {
      const idx = selection.indexOf(data[keyProp])
      selection.splice(idx, 1)
      setSelection([...selection])
    } else {
      setSelection([...selection, data[keyProp]])
    }
  }, [has, selection, setSelection, keyProp])

  const set = useCallback((data) => {
    setSelection([data[keyProp]])
  }, [setSelection])

  const reset = useCallback((keys = []) => {
    setSelection(keys)
  }, [setSelection])

  selection['toogle'] = toggle
  selection['reset'] = reset
  selection['has'] = has
  selection['set'] = set



  return selection as Array<any> & {
    toogle: typeof toggle,
    set: typeof set,
    reset: typeof reset
    has: typeof has
  }
}