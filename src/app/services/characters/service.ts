import {Character, Film, Species, Starship} from "@/app/clientApi"
import axios from "axios"
import {SwapiFilm, SwapiSpecies, SwapiStarship} from "@/app/api/swapiClient/types"
import * as swapiClient from '@/app/api/swapiClient'
import {BaseCharacter} from "@/app/clientApi/types"
import {
  transformToCharacter,
  transformToFilm,
  transformToSpecies,
  transformToStarship
} from "@/app/services/characters/transforms"
import * as db from "@/app/services/database"
import {saveCharacter} from "@/app/services/database"

export async function getCharacterById(id: string): Promise<Character | null> {

  const character = await maybeGetCharacterFromApi(id)

  if (!character) {
    return await db.getCharacterById(id)
  }

  await saveCharacter(character)
  return character
}

async function maybeGetCharacterFromApi(id: string): Promise<Character | undefined> {
  try {
    const character = await swapiClient.getCharacterById(id)

    let films: Film[] = []
    if (character.films.length > 0) {
      films = await Promise.all(character.films.map(async (film) => {
        const response = await axios.get<SwapiFilm>(film)
        return transformToFilm(response.data)
      }))
    }

    let starships: Starship[] = []
    if (character.starships.length > 0) {
      starships = await Promise.all(character.starships.map(async (starship) => {
        const response = await axios.get<SwapiStarship>(starship)
        return transformToStarship(response.data)
      }))
    }

    let species: Species[] = []
    if (character.species.length > 0) {
      species = await Promise.all(character.species.map(async (specie) => {
        const response = await axios.get<SwapiSpecies>(specie)
        return transformToSpecies(response.data)
      }))
    }

    const toCharacter = transformToCharacter(character)
    return {
      ...toCharacter,
      films,
      starships,
      species,
    }
  } catch (e) {
    console.error('Error getting character from API', e)
    return undefined
  }
}

// TODO: integrate with the database
export async function findCharacterByName(name: string): Promise<BaseCharacter[]> {
  const characters = await swapiClient.findCharacterByName(name)
  return characters.map(transformToCharacter)
}
