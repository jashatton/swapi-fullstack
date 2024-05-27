export interface HasId {
  id: string
}

export interface BaseCharacter extends HasId {
  name: string
  height: string
  mass: string
  hair_color: string
  birth_year: string
}

export interface Character extends BaseCharacter {
  species: Species[]
  starships: Starship[]
  films: Film[]
}

export interface Film extends HasId {
  title: string
}

export interface Starship extends HasId {
  name: string
}


export interface Species extends HasId {
  name: string
}
