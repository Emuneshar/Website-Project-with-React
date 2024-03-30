import React from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Grid>
        <Card
          title="Card 1"
          src="../Images/image1.jpg"
          content="Card 1 content"
          buttonText="Click Me"
          onButtonClick={() => console.log("Button Clicked!")}
        />
        <Card
          title="Card 1"
          src="../Images/image2.jpg"
          content="Card 1 content"
          buttonText="Click Me"
          onButtonClick={() => console.log("Button Clicked!")}
        />
        <Card
          title="Card 1"
          src="../Images/image3.jpg"
          content="Card 1 content"
          buttonText="Click Me"
          onButtonClick={() => console.log("Button Clicked!")}
        />
      </Grid>
    </>
  );
}

export default App;
