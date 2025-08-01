"use client"

export default function Navigation({ activeSection, scrollToSection }: any) {
  const links = ["home", "about", "skills", "projects", "contact"]

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-200/70 backdrop-blur-md shadow-md z-50 flex justify-center gap-6 py-3 text-gray-700">
      {links.map(link => (
        <button
          key={link}
          onClick={() => scrollToSection(link)}
          className={`capitalize hover:text-blue-700 transition ${
            activeSection === link ? "text-blue-800 font-bold" : ""
          }`}
        >
          {link}
        </button>
      ))}
    </nav>
  )
}
