import React from "react";
import "../css/MidBar.css";

const MidBar: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary" id="Thebar">
      <div className="container-fluid">
        <span className="navbar-text white-text">Live. Love. Scan.</span>
      </div>
    </nav>
  );
};

export default MidBar;
