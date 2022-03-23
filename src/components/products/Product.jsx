import React from "react";
import IconWrapper from "../shared/IconWrapper";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { getDiscountedPrice } from "../../utils/utils";
import { useProducts } from "../../context/products/ProductContext";
import { ADD_TO_CART } from "../../context/products/cart-reducer";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../../context/products/wishlist-reducer";

const Product = ({ product }) => {
  const { cartDispatch, wishlistState, wishlistDispatch } = useProducts();
  const isWishListed = wishlistState.some(
    (_product) => _product._id === product._id
  );

  function wishListHandler() {
    isWishListed
      ? wishlistDispatch({
          type: REMOVE_FROM_WISHLIST,
          payload: { id: product._id },
        })
      : wishlistDispatch({ type: ADD_TO_WISHLIST, payload: product });
  }
  return (
    <div className="card flex-col radius-md bg-white ">
      <div className="flex justify-between items-start">
        <div className="text-white bg-red px-2 flex center radius-top-left">
          Trending
        </div>
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
            onClick={() =>
              cartDispatch({ type: ADD_TO_CART, payload: product })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
