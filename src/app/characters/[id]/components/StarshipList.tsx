import type {Starship} from "@/app/clientApi"
import {CardItem, CardList, Text} from "@/app/design"

export default function StarshipList({starships = []}: { starships: Starship[] }) {
  return (
    <CardList>
      {starships.map((starship) => (
        <CardItem key={starship.id}><Text>{starship.name}</Text></CardItem>
      ))}
    </CardList>
  )
}
