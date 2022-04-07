import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../components/products/Product";
import ProductFilter from "../components/products/ProductFilter";
import TopBar from "../components/products/TopBar";
import {
  CLEAR_FILTER,
  FILTER_CATEGORY,
} from "../context/products/product-reducer";
import { useProducts } from "../context/products/ProductContext";
const Products = () => {
  
  const { filterProducts, productDispatch } = useProducts();
  const [searchparams] = useSearchParams();
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    searchparams.get("category") &&
      productDispatch({
        type: FILTER_CATEGORY,
        payload: { categoryName: searchparams.get("category") },
      });
    return () => {
    productDispatch({ type: CLEAR_FILTER });
    setShowMobileFilter(false);  
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchparams]);

  
  return (
    <main className="mt-2 flex-col product-filter-container">
      <div className="sidebar-filter">
        <ProductFilter />
      </div>
      <section className="product-listing bg-white mr-2">
        <TopBar />
        <div className="flex wrap center products product-list">
          {filterProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>

      <div className="show-filter-bar">
        {showMobileFilter && (
          <div className="mobile-filter-wrapper">
            <ProductFilter />
          </div>
        )}

        <button
          className="btn-grad-red w-full"
          onClick={() => setShowMobileFilter((v) => !v)}
        >
          {showMobileFilter ? "Close" : "Filter"}
        </button>
      </div>
    </main>
  );
};

export default Products;
