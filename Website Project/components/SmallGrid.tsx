import React from "react";
import BiggerCard from "../components/BiggerCard";
import "../css/SmallGrid.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SmallGrid: React.FC = () => {
  return (
    <div className="row">
      <div className="col-6">
        <img
          id="home-image"
          src="../Extracted Images/image-005.jpg"
          alt="Image 1"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div
        className="col-4 d-flex align-items-center justify-content-center card-container"
        style={{ padding: "20px" }}
      >
        <p className="text-black">
          <BiggerCard></BiggerCard>
        </p>
      </div>
    </div>
  );
};

export default SmallGrid;
