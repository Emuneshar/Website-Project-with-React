import React from "react";
import SmallGrid from "../components/SmallGrid";
import Carousel from "../components/Carousel";
import Grid from "../components/Grid";
import Card from "../components/Card";
import "../css/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <SmallGrid />
        <div style={{ margin: "20px 0" }}>
          <Carousel></Carousel>
        </div>
        <SmallGrid />
        <div style={{ margin: "20px 0" }}>
          <Grid>
            <Card
              title="Package 1"
              src="../Images/image1.jpg"
              content="Package 1 info"
              buttonText="Click Me"
              onButtonClick={() => console.log("Button Clicked!")}
            />
            <Card
              title="Package 2"
              src="../Images/image2.jpg"
              content="Package 2 info"
              buttonText="Click Me"
              onButtonClick={() => console.log("Button Clicked!")}
            />
            <Card
              title="Package 3"
              src="../Images/image3.jpg"
              content="Package 3 info"
              buttonText="Click Me"
              onButtonClick={() => console.log("Button Clicked!")}
            />
          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomePage;
