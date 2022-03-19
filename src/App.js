import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App bg-body-color">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={  <Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
