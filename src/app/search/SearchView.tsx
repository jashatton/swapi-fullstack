'use client'
import {SearchProvider} from "@/app/search/SearchProvider"
import {SearchBar} from "@/app/search/SearchBar"
import {Section} from "@/app/design"
import {SearchResultsList} from "@/app/search/SearchResultsList"
import {ApolloProvider} from "@apollo/client"
import {getWebClient} from "@/app/services/graphql"

export function SearchView() {

  return (
    <ApolloProvider client={getWebClient()}>
      <SearchProvider>
        <SearchBar/>
        <Section className="mx-auto">
          <SearchResultsList/>
        </Section>
      </SearchProvider>
    </ApolloProvider>
  )
}
