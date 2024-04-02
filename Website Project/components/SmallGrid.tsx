import React from "react";
import "../css/SmallGrid.css";
function SmallGrid() {
  return (
    <div className="row">
      <div className="col-4">
        <img src="../Images/Image1.jpg" />
      </div>
      <div className="col-8 text-here" style={{ color: "black !important" }}>
        Your text here
      </div>
    </div>
  );
}

export default SmallGrid;
