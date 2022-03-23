import React from "react";
import {
  CLEAR_FILTER,
  SORT_PRODUCT,
} from "../../context/products/product-reducer";
import { useProducts } from "../../context/products/ProductContext";
import "./product.css";
const TopBar = () => {
  const { productDispatch } = useProducts();
  function sortClickHandler(value) {
    if (value === "newest-first")
      productDispatch({ type: SORT_PRODUCT, payload: { name: value } });
    else if (value === "low-to-high")
      productDispatch({
        type: SORT_PRODUCT,
        payload: { name: "price", order: value },
      });
    else if (value === "high-to-low")
      productDispatch({
        type: SORT_PRODUCT,
        payload: { name: "price", order: value },
      });
  }
  return (
    <div className="flex justify-between px-4 py-2 bg-red text-white items-center font-small product-topbar">
      <button
        type="reset"
        className="p-0 px-2 radius-sm btn-grad-red"
        onClick={() => productDispatch({ type: CLEAR_FILTER })}
      >
        RESET FILTER
      </button>
      <span>
        <label htmlFor="sort">
          SORT BY <i className="fas fa-sort"></i>
        </label>
        <select
          name="sort"
          id="sort"
          className="bg-red radius-sm text-white"
          onChange={(e) => sortClickHandler(e.target.value)}
        >
          <option value="none">Select</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="newest-first">New</option>
        </select>
      </span>
    </div>
  );
};

export default TopBar;
