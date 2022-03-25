import React from "react";
import PriceDetails from "../components/cart/PriceDetails";
import CartCard from "../components/cart/CartCard";
import "../components/cart/cart.css";
import { useProducts } from "../context/products/ProductContext";
import {Link} from "react-router-dom"
import NoItemsDialog from "../components/shared/NoItemsDialog";
const Cart = () => {
  const { cartState } = useProducts();
  return cartState?.length === 0 ? (
    <NoItemsDialog title="Your cart is empty" description="Add items to it">
       <Link to="/products" className="btn-red shadow-gray radius-sm px-6 py-2">
        Shop Now
      </Link>
    </NoItemsDialog>
  ) : (
    <main className="p-2 flex-col justify-center cart-container">
      <div className="grow shadow-gray bg-white mx-2">
        <div className=" flex-col justify-between p-2">
          <h4 className="m-0"> My Cart ({cartState?.length})</h4>
        </div>
        <div className="flex wrap justify-center">
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
