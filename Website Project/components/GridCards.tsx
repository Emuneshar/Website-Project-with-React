import React from "react";

const GridCards: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="../Extracted Images/image-000.jpg"
              className="card-img-top"
              alt="Sample Image"
            />
            <div className="card-body">
              <h5 className="card-title">Package 1</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../Extracted Images/image-000.jpg"
              className="card-img-top"
              alt="Sample Image"
            />
            <div className="card-body">
              <h5 className="card-title">Package 2</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../Extracted Images/image-000.jpg"
              className="card-img-top"
              alt="Sample Image"
            />
            <div className="card-body">
              <h5 className="card-title">Package 3</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../Extracted Images/image-000.jpg"
              className="card-img-top"
              alt="Sample Image"
            />
            <div className="card-body">
              <h5 className="card-title">Package 4</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
