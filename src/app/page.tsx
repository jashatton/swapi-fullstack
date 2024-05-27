import {Main, TitleHeader} from "@/app/design"
import {SearchView} from "@/app/search/SearchView"

export default function Home() {
  return (
    <Main>
      <TitleHeader>SWAPI Fullstack Demo</TitleHeader>
      <SearchView/>
    </Main>
  )
}
