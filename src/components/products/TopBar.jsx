import React from "react";
import "./product.css"
const TopBar = () => {
  return (
    <div className="flex justify-between px-4 py-2 bg-red text-white items-center font-small product-topbar">
      <p className="m-0">RESET FILTER</p>
      <span>
        <label htmlFor="sort">
          SORT BY <i className="fas fa-sort"></i>
        </label>
        <select name="sort" id="sort">
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="new">New</option>
        </select>
      </span>
    </div>
  );
};

export default TopBar;
