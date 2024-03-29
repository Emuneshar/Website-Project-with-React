import React, { useState } from "react";

const ImageComponent: React.FC = () => {
  const [width, setWidth] = useState<number>(200);

  const handleResize = () => {
    setWidth(300);
  };

  return (
    <div>
      <img
        src="../Images/temp_image_one.jpg"
        alt="Your Image"
        style={{ width: "${width}px", height: "auto" }}
      />
      <button onClick={handleResize}>Resize</button>
    </div>
  );
};

export default ImageComponent;
