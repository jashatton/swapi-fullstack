import axios from 'axios'
import {Result, SwapiCharacter} from "@/app/api/swapiClient/types"
import * as db from '@/app/services/database'

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export async function findCharacterByName(name: string): Promise<SwapiCharacter[]> {
  const response = await swapi.get<Result<SwapiCharacter>>(`/people/?search=${name}`)
  return response.data.results
}

export async function getCharacterById(id: string): Promise<SwapiCharacter> {
  const response = await swapi.get<SwapiCharacter>(`/people/${id}/`)
  return response.data
}
