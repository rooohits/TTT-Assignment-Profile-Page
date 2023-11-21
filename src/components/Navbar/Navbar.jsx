import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbarContainer ${menuOpen ? "menuOpen" : ""}`}>
      <div className="navbarLeft">
        <img className="logo" src="assets\logo.png" alt="" />
      </div>

      <div className="navbarRight">
        {/* Hamburger Menu Button */}

        <div className="hamburgerMenu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navbar List or Dropdown */}
        {menuOpen ? (
          <div className="dropdown">
            <ul className="listItems">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : (
          <ul className="listItems">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
        {/* Courses Button */}
        <button className="btn">
          <p className="btnFont">Courses</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
