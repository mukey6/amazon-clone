import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/checkout" element={[<Checkout />]} />
          <Route exact path="/" element={[<Home />]} />
        </Routes>
        {/* header */}
        {/* home */}
      </div>
    </Router>
  );
}

export default App;
