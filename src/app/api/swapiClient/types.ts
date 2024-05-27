export interface Result<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface HasUrl {
  url: string
}

export interface SwapiCharacter extends HasUrl {
  name: string
  height: string
  mass: string
  hair_color: string
  birth_year: string
  films: string[]
  starships: string[]
  species: string[]
}

export interface SwapiFilm extends HasUrl {
  title: string
}

export interface SwapiStarship extends HasUrl {
  name: string
}

export interface SwapiSpecies extends HasUrl {
  name: string
}
