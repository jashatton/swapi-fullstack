import clsx from "clsx"

export function Text({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={clsx("text-xl text-pretty text-center align-middle", className)}>{children}</p>
}
