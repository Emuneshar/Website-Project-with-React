import React from "react";
import "../css/MidBar.css";

const MidBar: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary" id="Thebar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <img
          src="Extracted Images\image-000.jpg"
          alt="Left"
          className="navbar-icon"
        />
        <span className="navbar-text white-text">Live. Love. Scan.</span>
        <img
          src="Extracted Images\image-003.jpg"
          alt="Right"
          className="navbar-icon"
        />
      </div>
    </nav>
  );
};

export default MidBar;
