import React, { useState } from "react";

const ImageComponent: React.FC = () => {
  const [width, setWidth] = useState<number>(200);

  const handleResize = () => {
    setWidth(300);
  };
};
