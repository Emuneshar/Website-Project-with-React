import React from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";

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
    <>
      <NavBar></NavBar>
    </>
  );
}

export default App;
