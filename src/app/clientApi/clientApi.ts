import {BaseCharacter, Character} from "./types"
import {FIND_CHARACTERS_BY_NAME, GET_CHARACTER_BY_ID} from "@/app/clientApi/queries"
import {getWebClient} from "@/app/services/graphql"

export async function getCharacterById(id: string): Promise<Character> {
  const response = await getWebClient().query<{getCharacterById: Character }>({query: GET_CHARACTER_BY_ID, variables: {id}})
  return response.data.getCharacterById
}

export async function findCharacterByName(name: string): Promise<BaseCharacter[]> {
  const response = await getWebClient().query<{ findCharacterByName: BaseCharacter[] }>({query: FIND_CHARACTERS_BY_NAME, variables: {name}})
  return response.data.findCharacterByName
}
