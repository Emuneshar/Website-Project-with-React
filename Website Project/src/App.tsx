import React from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";

function App() {
  const CardData = [
    {
      id: 1,
      title: "Stuff",
      content: "Thing thing thing",
      buttontext: "Book Now",
    },
    {
      id: 1,
      title: "Stuff",
      content: "Thing thing thing",
      buttontext: "Book Now",
    },
    {
      id: 1,
      title: "Stuff",
      content: "Thing thing thing",
      buttontext: "Book Now",
    },
  ];

  return (
    <Grid>
      <Card
        title="Card 1"
        content="Card 1 content"
        buttonText="Click Me"
        onButtonClick={() => console.log("Button Clicked!")}
      />
      <Card
        title="Card 1"
        content="Card 1 content"
        buttonText="Click Me"
        onButtonClick={() => console.log("Button Clicked!")}
      />
      <Card
        title="Card 1"
        content="Card 1 content"
        buttonText="Click Me"
        onButtonClick={() => console.log("Button Clicked!")}
      />
    </Grid>
  );
}

export default App;
