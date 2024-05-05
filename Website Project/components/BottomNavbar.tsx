import React from "react";
import "../css/BottomNavBar.css";

const BottomNavbar: React.FC = () => {
  return (
    <nav className="navbar fixed-bottom bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </div>
    </nav>
  );
};

export default BottomNavbar;
