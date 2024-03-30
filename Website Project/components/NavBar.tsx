import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Ultrasound Clinic
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isDropDownOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className={`nav-item dropdown ${isDropDownOpen ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="/"
              onClick={toggleDropdown}
              id="navbarDropdown"
            >
              Services
            </a>
            <div className={`dropdown-menu ${isDropDownOpen ? "show" : ""}`}>
              <a className="dropdown-item" href="/services/design">
                Design
              </a>
              <a className="dropdown-item" href="/services/development">
                Development
              </a>
              <a className="dropdown-item" href="/services/marketing">
                Marketing
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
