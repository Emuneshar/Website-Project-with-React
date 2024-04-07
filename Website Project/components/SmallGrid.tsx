import React from "react";
import "../css/SmallGrid.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SmallGrid: React.FC = () => {
  return (
    <div className="row">
      <div className="col-6">
        <img src="../Images/Image1.jpg" alt="Image 1" />
      </div>
      <div className="col-4">
        <p className="text-black">Your text here</p>
      </div>
    </div>
  );
};

export default SmallGrid;
