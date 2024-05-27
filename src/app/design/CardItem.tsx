export function CardItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="bg-black shadow-gray-500 shadow-sm border border-solid border-gray-500 rounded-lg p-6 flex items-center justify-center min-w-52">
      {children}
    </li>
  )
}
