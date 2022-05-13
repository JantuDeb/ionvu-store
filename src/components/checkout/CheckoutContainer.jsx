import React from "react";

const CheckoutContainer = ({ children, title }) => {
  return (
    <div className="shadow-gray">
      <div className="p-2 bg-primary">
        <span className="tetx-6 text-white px-2 py-1 font-medium">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default CheckoutContainer;
