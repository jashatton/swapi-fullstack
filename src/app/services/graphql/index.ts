import {ApolloClient, InMemoryCache} from "@apollo/client"

export function getWebClient() {
  return new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  })
}
