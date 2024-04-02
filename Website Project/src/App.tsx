import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../components/Card";
import Grid from "../components/Grid";
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
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

export default App;
