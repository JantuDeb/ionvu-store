import React from "react";
import { Link } from "react-router-dom";
import IconWrapper from "../shared/IconWrapper";
import CheckoutContainer from "./CheckoutContainer";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { useProducts } from "../../context/products/ProductContext";
import { useAuth } from "../../context/auth/AuthContext";
export const OrderSummary = ({ checkoutStep, setCheckoutStep }) => {
  const { increaseCartQuantity, decreaseQuantity, cartState } = useProducts();
  const { authState } = useAuth();
  return (
    <CheckoutContainer title="ORDER SUMMARY">
      {checkoutStep === "orders" ? (
        <div>
          {cartState.map((cart) => {
            const { _id, title, price, photos } = cart.product;
            return (
              <div className="flex list-item" key={_id}>
                <Link to="/products" className="image-container flex center">
                  <img
                    src={photos[0].secure_url}
                    alt={title}
                    className="img-fluid"
                  />
                </Link>
                <div className="flex-col p-2">
                  <div className="cart-product-title flex">
                    <h6>{title}</h6>
                  </div>
                  <span className="text-green">In stock</span>
                  <div class="py-2"> Price: ₹{price}</div>
                  <div className="flex between">
                    <ul className="flex wrap list-unstyled justify-between m-0 gap-1">
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
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center p-2">
            {authState.isLogedIn && <p className="m-0">
              Order confirmation email will be sent to <span className="text-gray">{authState?.user?.email}</span>
            </p>}
            
            <button
              onClick={() => setCheckoutStep("payment")}
              className="btn-red border radius-sm"
            >
              CONTINUE
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center p-2">
          {cartState && <div>{cartState?.length} items</div>}
          <button
            onClick={() => setCheckoutStep("orders")}
            className="transparent border radius-sm"
          >
            Change
          </button>
        </div>
      )}
    </CheckoutContainer>
  );
};
