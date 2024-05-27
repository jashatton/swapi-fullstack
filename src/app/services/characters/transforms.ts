import {BaseCharacter, Film, HasId} from "@/app/clientApi/types"
import {HasUrl, SwapiCharacter, SwapiFilm, SwapiSpecies, SwapiStarship} from "@/app/api/swapiClient/types"

export function transformToCharacter(toRemap: SwapiCharacter): BaseCharacter {
  return transformWithId(toRemap, (remapped, id) => ({
    ...remapped,
    id,
  }))
}

export function transformToFilm(toRemap: SwapiFilm): Film {
  return transformWithId(toRemap, (remapped, id) => ({
    ...remapped,
    id,
  }))
}

export function transformToStarship(toRemap: SwapiStarship) {
  return transformWithId(toRemap, (remapped, id) => ({
    ...remapped,
    id,
  }))
}

export function transformToSpecies(toRemap: SwapiSpecies) {
  return transformWithId(toRemap, (remapped, id) => ({
    ...remapped,
    id,
  }))
}

function transformWithId<T extends HasUrl, R extends HasId>(toRemap: T, createNewObject: (remapped: Omit<T, 'url'>, id: string) => R): R {
  const id = parseIdFromUrl(toRemap.url)
  const {url, ...rest} = toRemap

  if (!id) throw new Error(`Failed to parse id from url ${url}`)

  return createNewObject(rest, id)
}

function parseIdFromUrl(url: string): string | null {
  const segments = url.split('/')

  try {
    let id = parseInt(segments[segments.length - 2])
    return !isNaN(id) ? id.toString() : null
  } catch (e) {
    return null
  }
}
