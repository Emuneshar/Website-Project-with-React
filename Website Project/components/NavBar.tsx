import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { Tiktok, Instagram } from "react-bootstrap-icons";
import logoImage from "../Extracted Images/LiveLoveScan.jpg";

const Navbar: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white border-bottom-gray ${
        isNavCollapsed ? "" : "navbar-fullscreen"
      }`}
    >
      <div className="container">
        <div className="row align-items-center w-100">
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
          <div className="col text-center">
            <Link className="navbar-text" id="SonoViews" to="/">
              Baby Sono Views
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarNav"
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
            <li
              className={`nav-item dropdown ${isDropDownOpen ? "show" : ""}`}
              ref={dropdownRef}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                Services
              </span>
              <div className={`dropdown-menu ${isDropDownOpen ? "show" : ""}`}>
                <Link className="dropdown-item" to="/services/Packages">
                  Packages
                </Link>
                <Link className="dropdown-item" to="/services/Shop">
                  Shop
                </Link>
                <Link className="dropdown-item" to="/services/Tutoring">
                  Tutoring
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://www.tiktok.com/" className="nav-link">
                <Tiktok size={24} color="black" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com/" className="nav-link">
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
