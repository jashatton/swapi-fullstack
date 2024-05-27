import Link from "next/link"

export function NavBar() {
  return (
    <nav className="flex justify-start items-center w-full">
      <Link className="cursor-pointer  hover:text-yellow-300" href="/"><p className="text-md underline hover:text-yellow-300 text-gray-300">Home</p></Link>
    </nav>
  )
}
