import React from "react";
import PriceDetails from "../components/cart/PriceDetails";
import CartCard from "../components/cart/CartCard";
import "../components/cart/cart.css";
import { useProducts } from "../context/products/ProductContext";
import {Link} from "react-router-dom"
const Cart = () => {
  const { cartState } = useProducts();
  return cartState?.length === 0 ? (
    <div className="flex-col center bg-white">
      <img src="./assets/images/cart.webp" className="img-fluid cart-item-0" />
      <h6>Your cart is empty</h6>
      <p>Add items to it </p>
      <Link to="/products" className="btn-red shadow-gray radius-sm px-6 py-2">Shop Now</Link >
    </div>
  ) : (
    <main className="p-2 flex-col justify-between cart-container">
      <div className="grow shadow-gray bg-white mx-2">
        <div className=" flex-col justify-between p-2">
          <h4 className="m-0"> My Cart (2)</h4>
        </div>
        <div className="flex wrap">
          {cartState.map((cart) => (
            <CartCard key={cart.product.id} cart={cart} />
          ))}
        </div>
      </div>
      <PriceDetails />
    </main>
  );
};

export default Cart;
