import { useState, useCallback } from 'react'
import { Action, mediatr } from '@mediatr/core'

export function useAction<P, R>(action: Action<P, R>, def: R = null as any) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(def)

  const handle = useCallback(async (params) => {
    setLoading(true)
    const result = await mediatr.handle(action, params)
    setData(result)
    setLoading(false)
    return result
  }, [action, setLoading, setData])

  return { data, loading, handle }

}
