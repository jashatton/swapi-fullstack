import type {Film} from "@/app/clientApi"
import {CardItem, CardList, Text} from "@/app/design"

export default function FilmsList({films = []}: { films: Film[] }) {
  return (
    <CardList>
      {films.map((film) => (
        <CardItem key={film.id}><Text>{film.title}</Text></CardItem>
      ))}
    </CardList>
  )
}
