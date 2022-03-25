import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../components/products/Product";
import ProductFilter from "../components/products/ProductFilter";
import TopBar from "../components/products/TopBar";
import { FILTER_CATEGORY } from "../context/products/product-reducer";
import { useProducts } from "../context/products/ProductContext";
const Products = () => {
  const { products, productDispatch } = useProducts();
  const [searchparams] = useSearchParams();

  useEffect(() => {
    searchparams.get("category") &&
      productDispatch({
        type: FILTER_CATEGORY,
        payload: { categoryName: searchparams.get("category") },
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchparams]);
  /**
   *
   */
  return (
    <main className="my-2 flex container">
      <ProductFilter />
      <section className="border product-listing bg-white mr-2">
        <TopBar />
        <div className="flex wrap center products">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
