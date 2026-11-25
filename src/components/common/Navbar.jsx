import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Namla<span>Stay</span>
        </Link>

        <button
          className="navbar-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          id="navbar-links"
          className={`navbar-links ${isMenuOpen ? "navbar-links-open" : ""}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/hotels" onClick={closeMenu}>
            Hotels
          </NavLink>
          <NavLink to="/add-hotel" onClick={closeMenu}>
            Add Hotels
          </NavLink>
        </div>
      </nav>
      {isMenuOpen && (
        <button
          className="navbar-overlay"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
};

export default Navbar;
