import React from "react";
import "../css/SmallGrid.css";
function SmallGrid() {
  return (
    <div className="row">
      <div className="col-4">
        <img src="../Images/Image1.jpg" alt="Image 1" />
      </div>
      <div className="col-8">
        <p className="text-dark">Your text here</p>
      </div>
    </div>
  );
}

export default SmallGrid;
