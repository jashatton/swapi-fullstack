import {gql} from "@apollo/client"

export const FIND_CHARACTERS_BY_NAME = gql`
  query FindCharacterByName($name: String!) {
    findCharacterByName(name: $name) {
      id
      name
    }
  }
`

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    getCharacterById(id: $id) {
      id
      name
      height
      mass
      hair_color
      birth_year
      films {
        id
        title
      }
      starships {
        id
        name
      }
      species {
        id
        name
      }
    }
  }
`
