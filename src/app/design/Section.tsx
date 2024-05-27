import {HTMLAttributes, PropsWithChildren} from "react"
import clsx from "clsx"

interface SectionProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {
  hide?: boolean
}

export function Section({children, hide, className}: SectionProps) {
  if (hide) return null

  return (
    <section className={clsx("w-full", className)}>
      {children}
    </section>
  )
}
