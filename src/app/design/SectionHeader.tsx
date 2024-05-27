export function SectionHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <header className={["flex flex-col gap-y-4 py-8", className].join((""))}>
      <h2 className="text-3xl font-bold">{children}</h2>
    </header>
  )
}
