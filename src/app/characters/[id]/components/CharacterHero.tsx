import {LabeledText} from "@/app/design"
import {Character} from "@/app/clientApi"

export default function CharacterHero({character}: { character: Character }) {
  const species = character.species.map((species) => species.name).join(", ")

  return (
    <div className="border-solid border-2 border-gray-500 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <LabeledText label="Height" value={character.height}/>
      <LabeledText label="Weight" value={character.mass}/>
      <LabeledText label="Hair Color" value={character.hair_color}/>
      <LabeledText label="Date of Birth" value={character.birth_year}/>
      {species && <LabeledText label="Species" value={species}/>}
    </div>
  )
}
