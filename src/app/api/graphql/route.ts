import {startServerAndCreateNextHandler} from "@as-integrations/next"
import {ApolloServer} from "@apollo/server"
import {NextRequest} from "next/server"
import {gql} from "graphql-tag"
import {findCharacterByName, getCharacterById} from "@/app/services/characters"

const typeDefs = gql`

  type Species {
    id: ID!
    name: String!
  }

  type Starship {
    id: ID!
    name: String!
  }

  type Film {
    id: ID!
    title: String!
  }

  type Character {
    id: ID!
    name: String!
    height: String
    mass: String
    hair_color: String
    birth_year: String
    films: [Film]
    starships: [Starship]
    species: [Species]
  }

  type Query {
    findCharacterByName(name: String!): [Character]
    getCharacterById(id: ID!): Character
  }
`

const resolvers = {
  Query: {
    findCharacterByName: async (_: never, args: { name: string }) => {
      return await findCharacterByName(args.name)
    },
    getCharacterById: async (_: never, args: { id: string }) => {
      return await getCharacterById(args.id)
    },
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({req}),
})

export {handler as GET, handler as POST}
