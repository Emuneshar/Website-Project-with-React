import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>}
      </Routes>
    </Router>
  );
}

export default App;
