'use client'

import Link from "next/link"
import {useSearch} from "@/app/search"
import {CardItem, CardList, Section, Text} from "@/app/design"
import {BaseCharacter} from "@/app/clientApi"

export function SearchResultsList() {
  const {characters = [], loading} = useSearch()

  if (loading) return (
    <div className="w-full text-2xl mx-auto text-center mt-14">Loading...</div>
  )

  if(characters.length === 0) return (
    <Section className="mx-auto">
      <Text className="text-2xl text-center">Search for character&apos;s name!</Text>
    </Section>
  )

  return (
    <CardList className="mx-auto w-full justify-center items-center">
      {characters.map((character: BaseCharacter) => (
        <CardItem key={character.id}>
          <Link className="w-full h-full cursor-pointer underline hover:text-yellow-300" href={`/characters/${character.id}`}>
            <Text>{character.name}</Text>
          </Link>
        </CardItem>
      ))}
    </CardList>
  )
}
