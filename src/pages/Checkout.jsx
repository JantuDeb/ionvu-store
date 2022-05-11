import { useEffect, useState } from "react";
import PriceDetails from "../components/cart/PriceDetails";
import { useAuth } from "../context/auth/AuthContext";
import {
  CheckoutLogin,
  CheckoutAddress,
  OrderSummary,
  CheckoutPayment,
} from "../components/checkout";

export const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState("login");
  const [selectedAddress, setSelectedAddress] = useState("");
  const { addresses, getAddresses } = useAuth();

  useEffect(() => {
    addresses.length === 0 && getAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  return (
    <main className="container p-2">
      <div className="flex-col grow gap-2 bg-white">
        <CheckoutLogin
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
        />
        <CheckoutAddress
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
        <OrderSummary
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
        />
        <CheckoutPayment
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
          selectedAddress = {selectedAddress}
        />
      </div>
      <PriceDetails />
    </main>
  );
};