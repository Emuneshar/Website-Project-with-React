import React from "react";
import "../css/BiggerCard.css";

const BiggerCard: React.FC = () => {
  return (
    <div className="card bg-white border-0" style={{ width: "18rem;" }}>
      <div className="card-body">
        <h1 className="card-title">
          Providing a once in a lifetime experience for you and your baby
        </h1>
        <p className="card-text larger-text">
          Here at Baby Sono Views we provide exceptional imaging services, for
          you and your family to enjoy. We offer a variety of packages such as
          gender reveals, pregnancy viability and 2D,3D/4D imaging.
        </p>
      </div>
    </div>
  );
};

export default BiggerCard;
