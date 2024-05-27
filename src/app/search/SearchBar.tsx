'use client'

import {ChangeEvent, useCallback, useEffect} from "react"
import {useSearch} from "@/app/search"
import {usePathname, useRouter, useSearchParams} from "next/navigation"

export function SearchBar() {
  const router = useRouter()
  const path = usePathname()
  const params = useSearchParams()

  const {doSearch, searchParam} = useSearch()

  useEffect(() => {
    const searchQuery = params.get('search') ?? ''

    if (searchQuery.length < 3) {
      return
    }

    doSearch(searchQuery)
  }, [doSearch, params, searchParam])


  const onChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value

    if (searchInput.length > 3) {
      doSearch(event.target.value)
    }

    router.replace(`${path}?search=${event.target.value}`)
  }, [doSearch, path, router])

  return (
    <div>
      <input type="text" className="text-lg text-black rounded-lg px-8 py-2" onChange={onChange} placeholder="Search"
             defaultValue={searchParam}/>
    </div>
  )
}
