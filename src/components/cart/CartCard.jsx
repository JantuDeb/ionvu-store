import React from "react";
import "./cart.css";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import IconWrapper from "../shared/IconWrapper";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/products/ProductContext";

const CartCard = ({ cart }) => {
  const { _id, title, price, photos } = cart.product;
  const { removeFromCart, increaseCartQuantity, decreaseQuantity } =
    useProducts();
  return (
    <div className="cart flex-col border m-2 radius-sm">
      <div className="flex center w-full">
        <img
          src={photos[0].secure_url}
          alt={title}
          className="img-fluid item-photo radius-sm"
        />
      </div>
      <div className="flex-col p-2">
        <Link to="/">{title}</Link>
        <span className="text-green">In stock</span>
        <ul className="flex wrap list-unstyled justify-between">
          <li>Quantity: </li>
          <li className="flex">
            <button
              className="radius-full border p-0"
              onClick={() => increaseCartQuantity(_id)}
            >
              <IconWrapper>
                <BsPlus />
              </IconWrapper>
            </button>
            <span className="input-qty mx-1">{cart.quantity}</span>
            <button
              className="radius-full border p-0"
              onClick={() => decreaseQuantity(_id)}
            >
              <IconWrapper>
                <FiMinus />
              </IconWrapper>
            </button>
          </li>
        </ul>
        <div className="py-2"> Price: ₹{price}</div>
        <div className="flex items-center justify-between">
          <button
            className="radius-md btn-outline-primary p-sm"
            onClick={() => removeFromCart(_id)}
          >
            Remove
          </button>
          <button className="radius-md btn-outline-primary p-sm">
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
