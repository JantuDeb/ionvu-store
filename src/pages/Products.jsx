import React from "react";
import ProductFilter from "../components/products/ProductFilter";
import TopBar from "../components/products/TopBar";
import IconWrapper from "../components/shared/IconWrapper";
import { useProducts } from "../context/products/ProductContext";
import { FiHeart } from "react-icons/fi";
const Products = () => {
  const { products } = useProducts();
  console.log(products[0]);
  return (
    <main className="mx-2 flex container">
      <ProductFilter />
      <section className="mx-2 border product-listing">
        <TopBar />
        <div className="flex wrap center products">
          {products.map((product) => (
            <div
              key={product._id}
              className="card flex-col radius-md m-2 bg-white "
            >
              <div className="flex justify-between">
                <div className="text-white bg-red px-2 flex center">
                  Trending
                </div>
                <IconWrapper>
                  <FiHeart size={20} />
                </IconWrapper>
              </div>

              <div className="flex-col justify-center">
                <div className="product-image-container">
                  <img
                    src={product.photos[0].secure_url}
                    className="img-fluid radius-md"
                    alt=""
                  />
                </div>
                <div className="product-info">
                  <p className="text-center text-gray font-medium">
                    {product.title}
                  </p>
                  <p className="text-center text-red">
                    ₹
                    {product.price -
                      Math.ceil(product.discount * product.price)}
                    <s className="text-gray">₹{product.price}</s>
                    {product.discount * 100}% off
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
