import React from "react";

interface CardProps {
  title: string;
  src: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

const cardStyle = {
  width: "18rem",
};
const Card: React.FC<CardProps> = ({
  title,
  src,
  content,
  buttonText,
  onButtonClick,
}) => {
  return (
    <>
      <div className="card" style={cardStyle}>
        <img
          src={"../Extracted Images/LiveLoveScan.jpg"}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <button className="btn btn-primary" onClick={onButtonClick}>
            Button Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
