import React from "react";
import Product from "../components/products/Product";
import ProductFilter from "../components/products/ProductFilter";
import TopBar from "../components/products/TopBar";
import { useProducts } from "../context/products/ProductContext";
const Products = () => {
  const { products } = useProducts();

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
