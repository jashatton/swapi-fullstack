export function Main({children}: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-y-4 items-center p-12">
      {children}
    </main>
  )
}
