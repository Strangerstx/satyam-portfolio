import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        Satyam<span>.</span>
      </a>

      <div
        className={`nav-links ${
          menuOpen ? "open" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </div>


      <a
        href="#contact"
        className="nav-talk"
      >
        Let's Talk →
      </a>


      <button
        className="menu-button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  )
}

export default Navbar