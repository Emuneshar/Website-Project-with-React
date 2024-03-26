import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode[];
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        {children.map((child, index) => (
          <div className="col-sm-4" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
