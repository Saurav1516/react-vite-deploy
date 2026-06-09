import { useState } from "react";
import "../styles/navbar.css";
import HoverButton from "./HoverButton";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const menuItems = ["About me", "Experience", "Skills", "Projects", "Why me"];

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => handleScroll("home")}>
            Shubham
          </div>

          <nav className="nav-links">
            {menuItems.map((item) => (
              <span
                key={item}
                className="nav-link"
                onClick={() => handleScroll(item)}
              >
                <span className="nav-text">{item}</span>
              </span>
            ))}
          </nav>

          <div className="nav-btn">
            <HoverButton className="bg-white">Start Project</HoverButton>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            MENU +
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-bar">
          <div className="logo">Shubham</div>

          <button className="menu-toggle" onClick={() => setMenuOpen(false)}>
            CLOSE –
          </button>
        </div>

        <div className="mobile-links">
          {menuItems.map((item) => (
            <span key={item} onClick={() => handleScroll(item)}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
