import React from "react";
const NoItemsDialog = ({ children, title, description }) => {
  return (
    <div className="flex-col center bg-white my-6 p-2">
      <img src="./assets/images/cart.webp" className="img-fluid cart-item-0" />
      <h6>{title}</h6>
      <p className="text-center">{description} </p>
      {children}
    </div>
  );
};

export default NoItemsDialog;
