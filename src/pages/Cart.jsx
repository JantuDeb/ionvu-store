import React from "react";
import PriceDetails from "../components/cart/PriceDetails";
import Card from "../components/cart/Card";
import "../components/cart/cart.css"
const Cart = () => {
  return (
    <main className="p-2 flex-col justify-between cart-container">
      <div className="grow shadow-gray bg-white mx-2">
        <div className=" flex-col justify-between p-2">
          <h4 className="m-0"> My Cart (2)</h4>
        </div>
        <div className="flex wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <PriceDetails />
    </main>
  );
};

export default Cart;
