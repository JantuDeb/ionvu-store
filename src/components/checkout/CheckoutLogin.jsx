import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import CheckoutContainer from "./CheckoutContainer";

export const CheckoutLogin = ({ checkoutStep, setCheckoutStep }) => {
  const { authState } = useAuth();
  return (
    <CheckoutContainer title="LOGIN">
      {checkoutStep === "login" ? (
        authState?.isLogedIn ? (
          <div className="p-4 bg-white">
            <span className="flex gap-2">
              <p className="text-gray">Name</p> <p>{authState?.user?.name}</p>
            </span>
            <span className="flex gap-2">
              <p className="text-gray">Email</p>
              <p>{authState?.user?.email}</p>
            </span>
            <button
              className="bg-red py-2 px-6 text-white radius-sm"
              onClick={() => setCheckoutStep("address")}
            >
              CONTINUE CHECKOUT
            </button>
          </div>
        ) : (
          <div className="p-2">
            <p className="text-gray m-0">Login to continue checkout</p>
            <Link
              to="/login"
              className="bg-red py-2 px-6 text-white radius-sm my-1 inline-block"
            >
              Login
            </Link>
          </div>
        )
      ) : (
        <div className="flex items-center justify-between p-2">
          {authState?.isLogedIn && (
            <div>
              <div className="flex gap-1">
                <span className="text-gray">Name:</span>
                <span>{authState?.user?.name}</span>
              </div>
              <div className="flex gap-1">
                <span className="text-gray">Email:</span>
                <span>{authState?.user?.email}</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCheckoutStep("login")}
            className="transparent border radius-sm"
          >
            Change
          </button>
        </div>
      )}
    </CheckoutContainer>
  );
};
