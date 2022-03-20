import React from "react";
const PriceDetails = () => {
  return (
    <div className="price-details flex-col shadow-gray mx-2 bg-white">
      <div className=" flex items-center p-2">
        <h4 className="m-0">Price Details</h4>
      </div>
      <div className="bg-white p-2">
        <div className="flex justify-between py-2 ">
          <span>Price (2 items) </span>
          <span>₹3,52,939</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Discount </span>
          <span className="text-success">− ₹46,000</span>
        </div>
        <div className="flex justify-between py-2 border-bottom-dotted">
          <span>Delivery Charges</span>
          <span className="text-success">FREE</span>
        </div>

        <div className="flex justify-between py-2 border-bottom-dotted">
          <span>Total Amount</span>
          <span>₹3,06,939 </span>
        </div>
        <div className="flex justify-between py-2 text-success">
          You will save ₹46,000 on this order
        </div>
        <button className="bg-red radius-md text-white"> Place Order </button>
      </div>
    </div>
  );
};

export default PriceDetails;
