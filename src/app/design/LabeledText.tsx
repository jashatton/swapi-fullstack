import {Text} from "@/app/design/Text"

export function LabeledText({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-x-4 items-center">
      <label className="font-bold text-nowrap">{label}:</label>
      <Text className="capitalize">{value}</Text>
    </div>
  )
}
