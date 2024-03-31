import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../components/Card";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Carousel></Carousel>
      </div>
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
    </>
  );
}

export default App;
