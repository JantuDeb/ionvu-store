import React from "react";
import IconWrapper from "../shared/IconWrapper";
import { FiHeart } from "react-icons/fi";
import { AiFillStar,AiFillHeart } from "react-icons/ai";
import { getDiscountedPrice } from "../../utils/utils";
import { useProducts } from "../../context/products/ProductContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const { wishlistState, addToWishList, removeFromWishList, addToCart } =
    useProducts();
  const { authState } = useAuth();
  const isWishListed = wishlistState.some(
    (_product) => _product._id === product._id
  );

  function wishListHandler(e) {
    e.preventDefault();
    if (!authState.isLogedIn) return toast.dark("You need to login first");
    isWishListed ? removeFromWishList(product._id) : addToWishList(product);
  }

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!authState.isLogedIn) return toast.dark("You need to login first");
    addToCart(product);
  };

  return (
    <Link
      to={`/products/${product._id}`}
      className="card flex-col radius-md bg-white "
    >
      <div className="flex justify-between items-start">
        {product.tag && (
          <div
            className={`text-white px-2 flex center radius-top-left ${
              product.tag === "Trending" ? "bg-red" : "bg-green"
            }`}
          >
            {product.tag}
          </div>
        )}
        <button className="p-0 radius-full icon-wish" onClick={wishListHandler}>
          <IconWrapper>
            {isWishListed ? (
              <AiFillHeart size={20} color="red" />
            ) : (
              <FiHeart size={20} />
            )}
          </IconWrapper>
        </button>
      </div>

      <div className="flex-col justify-center">
        <div className="product-image-container flex-col">
          <img
            src={product.photos[0].secure_url}
            className="img-fluid radius-md"
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="product-info py-2 flex-col items-center justify-between">
          <p className="text-center text-gray font-medium">{product.title}</p>
          <div className="flex center">
            <div className="bg-green px-2 text-white flex center radius-sm">
              {product.rating} <AiFillStar />
            </div>
            <p className="text-center text-red m-0 px-2">
              ₹{getDiscountedPrice(product.price, product.discount)}
              <s className="text-gray">₹{product.price}</s>
              {product.discount * 100}% off
            </p>
          </div>
          <button
            className="m-4 radius-md bg-red text-white btn-add-cart"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
