import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/Products";
import CartList from "./pages/CartList";
import Wishlist from "./pages/Wishlist";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import PrivateRoute from "./components/shared/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-body-color">
      <ToastContainer  autoClose={2000} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<PrivateRoute><CartList/></PrivateRoute>}/>
        <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
