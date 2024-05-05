import React from "react";
import "../css/BottomNavBar.css";

const FixedBottomNavbar: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </div>
    </nav>
  );
};

export default FixedBottomNavbar;
