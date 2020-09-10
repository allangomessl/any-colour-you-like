import { useEffect, useCallback } from "react"
import { Model, Query } from '@mediatr/crud-api'
import { useCommand } from "./useCommand"
import { useActionList } from "./useActionList"

export function useRepository<T extends Model.Crud<any>>(Model: T) {
  const listSearch = useCommand(Model.list)
  const list = useActionList(Model.list)
  const detail = useCommand(Model.detail)
  const save = useCommand(Model.save)
  const remove = useCommand(Model.remove)

  useEffect(() => {
    if (save.data) {
      list.data.put(save.data)
    }
  }, [save.data])

  const removeHandle = useCallback(async (params) => {
    const result = await remove.handle(params) as any as Query.Ids
    list.data.remove(...result.ids)
    return result as any
  }, [list.data.remove])

  const search = useCallback(async (query: string) => {
    return await listSearch.handle({ search: query, skip: 0 } as any)
  }, [listSearch.handle])

  return { search, list, save, detail, remove: { ...remove, handle: removeHandle } }
}
