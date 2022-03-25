import React from "react";
import {
  FILTER_BY_PRICE,
  FILTER_CATEGORY,
  FILTER_RATING,
} from "../../context/products/product-reducer";
import { useProducts } from "../../context/products/ProductContext";
import "./product.css";
const ProductFilter = () => {
  const categories = [
    "Eyeglasses",
    "Computer Glasses",
    "Reading Glasses",
    "Contact Lenses",
    "Sunglasses",
  ];

  const { productState, productDispatch } = useProducts();

  return (
    <aside className="flex-col mx-2 bg-white p-2 shadow-gray w-full">
      <div>
        <p className="text-gray h5">Categories</p>
        <ul className="list-unstyled">
          {categories.map((categoryName) => (
            <li key={categoryName}>
              <label>
                <input
                  type="checkbox"
                  className="p-1"
                  checked={productState.category[categoryName]}
                  onChange={() =>
                    productDispatch({
                      type: FILTER_CATEGORY,
                      payload: { categoryName },
                    })
                  }
                />
                <span className="p-1">{categoryName}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-gray h5">Price Range</p>
        <div className="my-3">
          <input
            type="range"
            name="cowbell"
            min="0"
            max="10000"
            step="500"
            className="range-secondary range w-full"
            id="price-range"
            onChange={(e) =>
              productDispatch({
                type: FILTER_BY_PRICE,
                payload: { start: 0, end: Number(e.target.value) },
              })
            }
          />
          <div className="flex justify-between my-1">
            <p className="border px-2 radius-md m-0">
              {productState.filterByPrice.start}
            </p>
            <span className="text-gray">to</span>
            <p className="border px-2 radius-md m-0">
              {productState.filterByPrice.end}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-gray h5">Ratings</p>
        <ul className="list-unstyled">
          {[4, 3, 2, 1].map((num) => (
            <li key={num}>
              <label>
                <input
                  type="radio"
                  className="p-1"
                  name="rating"
                  onChange={() => {
                    productDispatch({
                      type: FILTER_RATING,
                      payload: { starCount: num },
                    });
                  }}
                />
                <span className="p-1">{num} stars & above</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductFilter;
