import Link from "next/link"

export default function Navbar() {

  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "/"
    },
    {
      id: 2,
      name: "About",
      url: "/"
    },
    {
      id: 3,
      name: "Contact",
      url: "/"
    },
  ]

  return (
    <nav className="flex justify-around items-center p-2 shadow-sm">
      {/* Logo */}
      <span className="text-4xl tracking-wider leading-loose flex-1 flex justify-center items-center">
        <span className="font-pacifico text-primary">taist</span>
        <span className="ml-1 font-bold font-lobster">hive</span>
      </span>

      {/* Nav Links */}
      <ul className="flex justify-around items-center flex-1 font-sans uppercase">
        {
          navLinks.map((link) => (
            <li key={link.id} className="mr-3">
              <Link href={link.url}>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>

      {/* Auth Buttons */}
      <div className="flex-1 flex justify-end items-center pr-4">
        <button className="bg-primary-light text-white font-sans font-bold mr-3 p-3 shadow rounded-sm">Sign In</button>
        <button className="bg-transparent text-black border-primary-light border font-sans font-bold mr-3 p-3 shadow rounded-sm">Sign Up</button>
      </div>
    </nav>
  )
}