import React from "react";
import { useProducts } from "../../context/products/ProductContext";
const PriceDetails = () => {
  const { cartState } = useProducts();

  function getPriceDetails(cartList) {
    return cartList.reduce(
      (acc, cur) => ({
        ...acc,
        totalPrice: acc.totalPrice + cur.product.price * cur.quantity,
        totalDiscount:
          acc.totalDiscount +
          Math.ceil(cur.product.price * cur.quantity * cur.product.discount),
      }),

      { totalPrice: 0, totalDiscount: 0 }
    );
  }
  const { totalDiscount, totalPrice } = getPriceDetails(cartState);

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
        <button className="bg-red radius-md text-white"> Place Order </button>
      </div>
    </div>
  );
};

export default PriceDetails;
