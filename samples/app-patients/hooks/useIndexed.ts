import { map } from 'lodash/fp'
import { useCallback, useMemo, useState } from 'react'

export declare namespace useIndexed {

  interface Result<T> extends Array<T> {
    remove: (...ids: number[]) => void
    put: (...items: T[]) => T[]
    get: (key: any) => T
    clear:  () => void
  }

}

export function useIndexed<T>(data: T[], prop = 'id'): useIndexed.Result<T> {
  const [indexed, setIndexed] = useState({})
  const [sort, setSort] = useState([])
  
  // useEffect(() => {
  //   setIndexed(fp.indexBy(fp.prop(prop), data))
  //   setSort(fp.map(fp.prop(prop), data))
  // }, [setIndexed, setSort, prop, data])

  const remove = useCallback((...ids: number[]) => {
    const newSort = [...sort]
    const newIndexed = { ...indexed }

    ids.forEach((id: number) => {
      delete newIndexed[id]
      const sortIdx = newSort.indexOf(id)
      if (sortIdx >= 0) {
        newSort.splice(sortIdx, 1)
      }
    })
    setSort(newSort)
    setIndexed(newIndexed)
  }, [indexed, sort])

  const put = useCallback((...items: any[]) => {
    const newIndexed = { ...indexed }
    const newSort = [...sort]
    const newItems = []

    items.forEach(item => {
      newIndexed[item[prop]] = item
        
      const sortIdx = newSort.indexOf(item[prop])
      if (sortIdx >= 0) {
        newSort.splice(sortIdx, 1)
      }
      newItems.push(item[prop])
    })

    setIndexed(newIndexed)
    setSort([...newItems, ...newSort])
    return map(id => newIndexed[id], newSort)
  }, [indexed, sort, prop])

  const get = useCallback((key: any) => {
    return indexed[key]
  }, [indexed])

  const clear = useCallback(() => {
    setIndexed({})
    setSort([])
  }, [setIndexed, setSort])

  const result = useMemo(() => {
    const arr = sort.map(id => indexed[id]) as useIndexed.Result<T>
    arr.remove = remove
    arr.put = put
    arr.get = get
    arr.clear = clear
    return arr
  }, [sort, indexed, clear, get, put, remove])

  return result
}