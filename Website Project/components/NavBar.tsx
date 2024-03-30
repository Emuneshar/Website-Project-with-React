import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Ultrasound Clinic
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isDropDownOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className={`nav-item dropdown ${isDropDownOpen ? "show" : ""}`}>
            <span className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Services
            </span>
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
