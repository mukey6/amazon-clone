
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Header/> */}
        <Route exact path="/login" element={[<Login />]}/>
          <Route exact path="/checkout" element={[ <Header />, <Checkout />]} />
          <Route exact path="/" element={[  <Header /> ,<Home />]} />
        </Routes>
        {/* header */}
        {/* home */}
      </div>
    </Router>
  );
}

export default App;
