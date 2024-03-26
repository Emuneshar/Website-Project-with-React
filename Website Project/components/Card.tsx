import React from "react";

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

const cardStyle = {
  width: "18rem",
};
const Card: React.FC<CardProps> = ({ title, content, buttonText }) => {
  return (
    <>
      <div className="card" style={cardStyle}>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
