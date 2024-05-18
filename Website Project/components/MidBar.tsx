import React from "react";
import "../css/MidBar.css";

const MidBar: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary the-midBar">
      <div className="container-fluid">
        <span className="navbar-text">Live. Love. Scan.</span>
      </div>
    </nav>
  );
};

export default MidBar;
