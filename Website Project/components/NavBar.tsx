import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { Tiktok } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import logoImage from "../Extracted Images/LiveLoveScan.jpg";
const Navbar: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white border-bottom-gray ${
        isNavCollapsed ? "" : "navbar-fullscreen"
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <Link className="navbar-brand" to="/">
              <img
                src={logoImage}
                alt="Logo"
                className="navbar-logo"
                style={{ maxHeight: "100px", maxWidth: "auto" }}
              />
            </Link>
          </div>
          <div className="col">
            <Link className="navbar-text" id="SonoViews" to="/">
              Baby Sono Views
            </Link>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => handleNavCollapse()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
        >
          <ul className="navbar-nav ml-auto">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://www.tiktok.com/" className="nav-link">
                <Tiktok size={24} color="black" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://www.amazon.com/" className="nav-link">
                <Instagram size={24} color="black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
