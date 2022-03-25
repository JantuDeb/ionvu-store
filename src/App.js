import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/Products";
import CartList from "./pages/CartList";
import Wishlist from "./pages/Wishlist";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="App bg-body-color">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<CartList/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
