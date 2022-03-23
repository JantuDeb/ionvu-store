import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/products/Product";
import ProductFilter from "../components/products/ProductFilter";
import TopBar from "../components/products/TopBar";
import { useProducts } from "../context/products/ProductContext";
const Products = () => {
  const { filterProducts } = useProducts();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const { loadProducts } = useProducts();
  useEffect(() => {
    loadProducts();
    return () => setShowMobileFilter(false);
  }, []);

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
