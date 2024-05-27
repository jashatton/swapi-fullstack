import type {Species} from "@/app/clientApi"
import {CardItem, CardList, Text} from "@/app/design"

export default function SpeciesList({species = []}: { species: Species[] }) {
  return (
    <CardList>
      {species.map((specie) => (
        <CardItem key={specie.id}><Text>{specie.name}</Text></CardItem>
      ))}
    </CardList>
  )
}
