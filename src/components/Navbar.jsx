import { useState } from "react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={() => scrollTo("hero")}>
          <span className="dot" />
          yashkumar.dev
        </a>

        <nav className="nav-tabs">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
          <button
            key={link.id}
            className={active === link.id ? "active" : ""}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
