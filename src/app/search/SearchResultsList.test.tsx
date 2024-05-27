import {render, screen} from '@testing-library/react'
import {SearchResultsList} from './SearchResultsList'
import {SearchProvider, useSearch} from "@/app/search"
import {beforeEach, describe, expect, it, jest} from "@jest/globals"
import {Character} from "@/app/clientApi"
import {ReactNode} from "react"

jest.mock('@/app/search', () => ({
  useSearch: jest.fn()
}))

// TODO: absolute modules are not working in tests and mocking
describe.skip('SearchResultsList component', () => {
  const mockCharacter = {id: '1', name: 'Luke Skywalker'}

  const mockUseSearch = useSearch as jest.MockedFunction<typeof useSearch>

  beforeEach(() => {
    mockUseSearch.mockClear()
  })

  it('should display loading when search is in progress', () => {
    mockUseSearch.mockReturnValue({characters: [], loading: true, doSearch: () => null, searchParam: ''})

    render(<SearchResultsList/>, wrapper)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should display characters when search is completed', () => {
    mockUseSearch.mockReturnValue({characters: [mockCharacter as Character], loading: false, doSearch: () => null, searchParam: ''})

    render(<SearchResultsList/>, wrapper)
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  })

  it('should not display characters when search is completed with no results', () => {
    mockUseSearch.mockReturnValue({characters: [], loading: false, doSearch: () => null, searchParam: ''})

    render(<SearchResultsList/>, wrapper)
    expect(screen.queryByText('Luke Skywalker')).not.toBeInTheDocument()
  })
})

const wrapper = {wrapper: ({children}: { children: ReactNode}) => <SearchProvider>{children}</SearchProvider>}

