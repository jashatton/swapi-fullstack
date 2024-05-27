import CharacterHero from "@/app/characters/[id]/components/CharacterHero"
import {getCharacterById} from "@/app/clientApi"
import StarshipList from "@/app/characters/[id]/components/StarshipList"
import FilmsList from "@/app/characters/[id]/components/FilmsList"
import {Main, NavBar, SectionHeader, TitleHeader} from "@/app/design"
import {Section} from "@/app/design/Section"

export default async function CharacterPage({params}: {
  params: { id: string }
}) {
  const {id} = params
  const idFromParam = Array.isArray(id) ? id[0] : id
  const character = await getCharacterById(idFromParam as string)

  return (
    <Main>
      <NavBar/>
      <TitleHeader>{character.name}</TitleHeader>
      <Section>
        <SectionHeader>About Me</SectionHeader>
        <CharacterHero character={character}/>
      </Section>
      <Section hide={character.films.length === 0}>
        <SectionHeader>Films Appeared In</SectionHeader>
        <FilmsList films={character.films}/>
      </Section>
      <Section hide={character.starships.length === 0}>
        <SectionHeader>Starships Flown</SectionHeader>
        <StarshipList starships={character.starships}/>
      </Section>
    </Main>
  )
}
