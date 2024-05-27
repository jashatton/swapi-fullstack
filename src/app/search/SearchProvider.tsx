'use client'

import React, {useCallback, useMemo, useState} from "react"
import {BaseCharacter} from "@/app/clientApi"
import {useLazyQuery} from "@apollo/client"
import {FIND_CHARACTERS_BY_NAME} from "@/app/clientApi"

type SearchContextType = {
  doSearch: (search: string) => void
  characters: BaseCharacter[]
  loading: boolean
  searchParam: string
}

const SearchContext = React.createContext<SearchContextType>({
  doSearch: () => {
  },
  characters: [],
  loading: false,
  searchParam: '',
})

export function SearchProvider({children}: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState('')

  const [findCharacterByName, {loading, data}] = useLazyQuery(FIND_CHARACTERS_BY_NAME)

  const doSearch = useCallback((search: string) => {
    findCharacterByName({variables: {name: search}})
    setSearchParam(search)
  }, [findCharacterByName])

  const value = useMemo(() => ({
    doSearch,
    characters: data?.findCharacterByName ?? [],
    loading,
    searchParam
  }), [data?.findCharacterByName, doSearch, loading, searchParam])

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  return React.useContext(SearchContext)
}
