import React from "react";
import { useProducts } from "../../context/products/ProductContext";
import { getProductWithTag } from "../../utils/utils";
import Product from "../products/Product";

const TaggedProductList = ({ tag, title }) => {
  const { products } = useProducts();
  const trendingProducts = getProductWithTag({ tag, products });
  return (
    <section>
      <h1 className="text-center p-4">{title}</h1>
      <div className="flex wrap center products">
        {trendingProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TaggedProductList;
