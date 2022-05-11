import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import PrivateRoute from "./components/shared/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Account, CartList, Checkout, Home, LogIn, PageNotFound, ProductDetail, Products, SignUp, Wishlist } from "./pages";
import { Address, Order, Profile } from "./components/account";



function App() {
  return (
    <div className="App bg-body-color">
      <ToastContainer autoClose={2000} limit={1} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartList />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Order />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
