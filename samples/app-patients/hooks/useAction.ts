import { useState, useCallback } from 'react'
import { Command, mediatr } from '@mediatr/core'

export function useCommand<P, R>(command: Command<P, R>, def: R = null as any) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(def)

  const handle = useCallback(async (params) => {
    setLoading(true)
    const result = await mediatr.handle(command, params)
    setData(result)
    setLoading(false)
    return result
  }, [command, setLoading, setData])

  return { data, loading, handle }

}
