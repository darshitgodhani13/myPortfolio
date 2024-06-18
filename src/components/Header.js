import React, { useState } from "react";
import { Link } from "react-scroll";
import imgLogo from "../assets/img/Mylogo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav-logo">
            <img src={imgLogo} className="mylogo" alt="Z" />
          </a>
        </div>
        <div className="welcome-container">
          <h1 className="Middle-Head">Darshit</h1>
        </div>
        <div className={`nav-menu ${menuOpen ? "show" : ""}`} id="nav-menu">
          <ul className="nav-list">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li className="nav-item" key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    activeClass="active"
                    spy={true}
                    onClick={toggleMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
