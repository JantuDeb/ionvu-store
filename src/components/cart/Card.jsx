import React from "react";
import "./cart.css";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import IconWrapper from "../shared/IconWrapper";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="cart flex-col border m-2 radius-sm">
      <div className="flex center">
        <Link to="/">
          <img
            src="/assets/images/img-1.jpg"
            alt="product image"
            className="img-fluid item-photo radius-sm"
          />
        </Link>
      </div>
      <div className="flex-col p-2">
        <Link to="/">
          Full Rim Acetate Rectangle Brown Male Medium Eyeglasses
        </Link>
        <span className="text-green">In stock</span>
        <ul className="flex wrap list-unstyled justify-between">
          <li>Quantity: </li>
          <li className="flex">
            <span className="radius-full border">
              <IconWrapper>
                <BsPlus />
              </IconWrapper>
            </span>
            <span>
              <input type="text" placeholder="1" className="input-qty mx-2" />
            </span>
            <span className="radius-full border">
              <IconWrapper>
                <FiMinus />
              </IconWrapper>
            </span>
          </li>
        </ul>
        <div className="py-2"> Price: ₹3599</div>
        <div className="flex items-center justify-between">
          <button className="radius-md btn-outline-primary p-sm">Remove</button>
          <button className="radius-md btn-outline-primary p-sm">
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
