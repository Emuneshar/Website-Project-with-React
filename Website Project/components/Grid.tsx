import React from "react";

interface GridProps {
  cards: { id: number; title: string; content: string; buttonText: string }[];
}

const Grid: React.FC<GridProps> = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h5>{card.title}</h5>
          <p>{card.content}</p>
          <a href="#" className="btn btn-primary">
            {card.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Grid;
