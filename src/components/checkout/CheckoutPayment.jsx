import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { useProducts } from "../../context/products/ProductContext";
import { axioxPrivate } from "../../utils/axios-instance";
import { getAddress, getDiscountedPrice } from "../../utils/utils";
import Button from "../loader/Button";
import CheckoutContainer from "./CheckoutContainer";
import { GET_CARTS_PRODUCTS } from "../../context/products/cart-reducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const CheckoutPayment = ({ checkoutStep, selectedAddress }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { totalDiscount, totalPrice, cartState, cartDispatch } = useProducts();
  const {
    authState: { user },
    addresses,
  } = useAuth();
  const navigate = useNavigate();
  const address = getAddress(addresses, selectedAddress);
  const amount = totalPrice - totalDiscount;

  const getApiKey = async () => {
    const { data } = await axioxPrivate.get("paymentkey");
    if (data?.razorpaykey) {
      return data.razorpaykey;
    }
  };

  const capturePayment = async () => {
    const { data } = await axioxPrivate.post("capturerazorpay", { amount });
    if (data?.success) {
      return { amount: data.amount, orderId: data.order?.id };
    }
  };

  const createOrder = async (paymentInfo, amount) => {
    const orderItems = cartState.map(({ quantity, product }) => ({
      quantity,
      product: product._id,
      title: product.title,
      image: product.photos[0].secure_url,
      price: getDiscountedPrice(product.price, product.discount),
    }));

    const requestBody = {
      address: address._id,
      orderItems,
      paymentInfo,
      totalAmount: amount,
    };
    try {
      const { data } = await axioxPrivate.post("/orders", requestBody);
      if (data.success) {
        toast.success("Order placed");
        cartDispatch({
          type: GET_CARTS_PRODUCTS,
          payload: {
            carts: [],
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadRazorPay = async () => {
    setLoading(true);
    const KEY = await getApiKey();
    const { amount, orderId } = await capturePayment();

    const options = {
      key: KEY,
      amount: amount,
      currency: "INR",
      name: "IONVU STORE",
      order_id: orderId,
      handler: function (response) {
        const paymentInfo = {
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
        };
        createOrder(paymentInfo, amount);
        setLoading(false);
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
      prefill: {
        name: user ? user?.name : "",
        email: user ? user.email : "",
        contact: "+91" + address?.phone,
      },
      notes: {
        address: {
          _id: selectedAddress,
        },
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      setError(response.error.description);
      setLoading(false);
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.className = "rzp-script";
    document.body.appendChild(script);
    return () => {
      const razorpayDiv =
        document.getElementsByClassName("razorpay-container")[0];
      const razorpayScript = document.querySelector(".rzp-script");
      if (razorpayDiv) {
        document.body.removeChild(razorpayDiv);
      }
      if (razorpayScript) {
        document.body.removeChild(razorpayScript);
      }
    };
  }, []);

  return (
    <CheckoutContainer title="PAYMENT">
      {checkoutStep === "payment" && (
        <div className="p-2">
          <Button
            loading={loading}
            btnStyle="btn-red py-2 px-6 radius-sm"
            clickHandler={loadRazorPay}
            disable={loading}
            text="Pay Now"
          />
        </div>
      )}
    </CheckoutContainer>
  );
};
