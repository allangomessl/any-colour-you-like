import { useState, useCallback, useEffect } from 'react'
import { Command, mediatr } from '@mediatr/core'
import { Query } from '@mediatr/crud-api'
import { useIndexed } from './useIndexed'
import { useCommand } from './useCommand'

export const Empty = []

export function useActionList<P extends Query.FindMany, R>(command: Command<P, R>, def: R = null as any) {
  const list = useCommand(command)
  const [lastParam, setLastParam] = useState<P>({} as any)

  const data = useIndexed(Empty)

  const handle = useCallback(async (params: P) => {
    data.clear()
    await list.handle(params)
    setLastParam({ ...params })
  }, [data, setLastParam, command, list.handle])

  const next = useCallback(async () => {
    lastParam.skip = (lastParam.skip || 0) + (lastParam.take || 30)
    await list.handle(lastParam)
    setLastParam({ ...lastParam })
  }, [lastParam, setLastParam, list.handle])

  useEffect(() => {
    data.put(...(list.data || []) as any)
  }, [list.data])

  return { data, loading: list.loading, handle, next }

}
