import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/about" components={About} /> */}
          {/* <Route path="/products" components={Products} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
