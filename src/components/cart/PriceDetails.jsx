import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../../context/products/ProductContext";
const PriceDetails = () => {
  const { cartState, totalDiscount, totalPrice } = useProducts();
  const { pathname } = useLocation();

  return (
    <div className="price-details flex-col shadow-gray mx-2 bg-white">
      <div className=" flex items-center p-2">
        <h4 className="m-0">Price Details</h4>
      </div>
      <div className="bg-white p-2">
        <div className="flex justify-between py-2 ">
          <span>Price ({cartState?.length} items) </span>
          <span>₹{totalPrice}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Discount </span>
          <span className="text-success">− ₹{totalDiscount}</span>
        </div>
        <div className="flex justify-between py-2 border-bottom-dotted">
          <span>Delivery Charges</span>
          <span className="text-success">FREE</span>
        </div>

        <div className="flex justify-between py-2 border-bottom-dotted">
          <span>Total Amount</span>
          <span>₹{totalPrice - totalDiscount} </span>
        </div>
        <div className="flex justify-between py-2 text-success">
          You will save ₹{totalDiscount} on this order
        </div>
        {pathname === "/cart" && (
          <Link to="/checkout">
            <button className="bg-red radius-md text-white">Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PriceDetails;
