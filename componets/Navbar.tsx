import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-slate-900 mb-4 flex justify-between items-center px-20 p-3">
        <Link href="/" className="text-bold text-black">Home</Link>
        <ul>
            <li className="text-bold text-black">
                <Link href="/">Users</Link>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar