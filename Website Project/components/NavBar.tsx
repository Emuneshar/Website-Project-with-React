import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
const Navbar: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-light border-bottom-gray">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ultrasound Clinic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDropdown}
        >
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
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                Services
              </span>
              <div className={`dropdown-menu ${isDropDownOpen ? "show" : ""}`}>
                <Link className="dropdown-item" to="/services/design">
                  Design
                </Link>
                <Link className="dropdown-item" to="/services/development">
                  Development
                </Link>
                <Link className="dropdown-item" to="/services/marketing">
                  Marketing
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
