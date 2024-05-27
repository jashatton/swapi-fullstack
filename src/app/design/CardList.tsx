import {HTMLAttributes, PropsWithChildren} from "react"
import clsx from "clsx"

type CardListProps = HTMLAttributes<HTMLElement> & PropsWithChildren

export function CardList({ children, className }: CardListProps) {
  return (
    <ul className={clsx("flex flex-wrap gap-8", className)}>
      {children}
    </ul>
  )
}
