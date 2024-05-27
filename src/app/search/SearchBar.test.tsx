import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {SearchBar} from '@/app/search'
import {beforeEach, describe, expect, it, jest} from "@jest/globals"
import {ReactNode} from "react"
import {MockedProvider} from "@apollo/client/testing"
import type {MockedResponse} from "@apollo/client/testing/core"
import {FIND_CHARACTERS_BY_NAME} from "@/app/clientApi/queries"

jest.mock('@/app/services/graphql')

// TODO: absolute modules are not working in tests and mocking
describe.skip('SearchBar component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display characters when search input is filled', async () => {
    render(<SearchBar/>, wrapperFactory([
      {
        request: {
          query: FIND_CHARACTERS_BY_NAME,
          variables: {
            name: "Buck"
          }
        },
        result: {
          data: {
            findCharacterByName: [{id: "1", name: "Buck"}]
          }
        }
      }
    ]))

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Luke'}})
    await waitFor(() => expect(screen.getByText('Luke Skywalker')).toBeInTheDocument())
  })

  it('should display loading when search is in progress', async () => {
    render(<SearchBar/>, wrapperFactory([
      {
        request: {
          query: FIND_CHARACTERS_BY_NAME,
          variables: {
            name: "Buck"
          }
        },
        result: {
          data: {
            findCharacterByName: [{id: "1", name: "Buck"}]
          }
        }
      }
    ]))
    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'Luke'}})

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})

const wrapperFactory = (mocks: MockedResponse<any, any>[]) => ({
  wrapper: ({children}: { children: ReactNode }) => (
    <MockedProvider mocks={mocks}>{children}</MockedProvider>
  )
})
