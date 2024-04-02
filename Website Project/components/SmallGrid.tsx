import React from "react";

function SmallGrid() {
  return (
    <div className="row">
      <div className="col-4">
        <img src="../Images/Image1.jpg" />
      </div>
      <div className="col-8" style={{ color: "black" }}>
        Your text here
      </div>
    </div>
  );
}

export default SmallGrid;
