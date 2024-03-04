import React from "react";

import "./App.css";

import Price from "./app/price/price";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./app/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </Router>
  );
};

export default App;