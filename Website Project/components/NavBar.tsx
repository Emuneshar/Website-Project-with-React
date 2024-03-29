import React, { useState } from "react";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li
            className="navbar-item"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/services">Services</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/services/design">Design</a>
                </li>
                <li>
                  <a href="/services/development">Development</a>
                </li>
                <li>
                  <a href="/services/marketing">Marketing</a>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
