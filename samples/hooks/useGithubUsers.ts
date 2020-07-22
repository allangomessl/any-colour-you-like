import { useState, useEffect, useCallback } from "react"

export function useGithub() {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setPage] = useState(30)

  useEffect(() => {
    setloading(true)
    fetch('https://api.github.com/users?since=0').then(result => result.json())
    .then(setData)
    .finally(() => setloading(false))
  }, [])

  const more = useCallback(() => {
    setloading(true)
    fetch(`https://api.github.com/users?since=${page}`).then(result => result.json())
    .then(nextData => {
      setData([...data, ...nextData])
      setPage(page + 30)
    })
    .finally(() => setloading(false))
  }, [page, data, setPage])

  const search = useCallback(async (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`).then(result => result.json()).then(r => r?.items || [])
  }, [])

  return {
    data, 
    loading,
    search,
    more
  }
}