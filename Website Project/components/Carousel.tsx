import React from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {[...Array(3)].map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSlideChange(index)}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? "active" : ""
            } d-flex justify-content-center`}
          >
            <img
              src={`../Images/temp_image_${index + 1}.jpg`}
              className="d-block"
              alt={`Slide ${index}`}
              style={{ width: "400px", height: "300px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide {index + 1} label</h5>
              <p>
                Some representative placeholder content for slide {index + 1}.
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => handleSlideChange((activeIndex - 1 + 3) % 3)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => handleSlideChange((activeIndex + 1) % 3)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
