import { useState } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import CheckoutContainer from "./CheckoutContainer";
import { BsPlus } from "react-icons/bs";
import AddressForm from "../account/AddressForm";
import { getAddress } from "../../utils/utils";

export const CheckoutAddress = ({
  selectedAddress,
  setSelectedAddress,
  checkoutStep,
  setCheckoutStep,
}) => {
  const [showAddressFrom, setShowAddressForm] = useState(false);
  const { addresses } = useAuth();
  const address = getAddress(addresses, selectedAddress);
  return (
    <CheckoutContainer title="DELIVERY ADDRESS">
      {checkoutStep === "address"
        ? addresses.map((address) => {
            return (
              <div key={address._id} className="flex items-center  border p-2">
                <div>
                  <input
                    type="radio"
                    name="address"
                    id={address._id}
                    checked={address._id === selectedAddress}
                    onChange={() => setSelectedAddress(address._id)}
                  />
                </div>
                <label
                  htmlFor={address._id}
                  className="flex-col grow p-2 gap-1"
                >
                  <div className="flex justify-between">
                    <span className="address-type">{address.addressType}</span>
                    <button className="transparent p-0 text-red ">EDIT</button>
                  </div>
                  <div className="flex gap-2 font-medium px-2">
                    <p className="m-0">{address.name}</p>
                    <p className="m-0">{address.phone}</p>
                  </div>
                  <div className="px-2">
                    <span>{address.addressLine1}</span>
                    <span>{address.city}</span>
                    <span>{address.state}</span> -{" "}
                    <span>{address.pincode}</span>
                  </div>
                  {selectedAddress === address._id && (
                    <div>
                      <button
                        className="btn-red py-2 px-6 radius-sm"
                        onClick={() => setCheckoutStep("orders")}
                      >
                        DELIVER HERE
                      </button>
                    </div>
                  )}
                </label>
              </div>
            );
          })
        : address && (
            <div className="flex justify-between p-2">
              <div className="flex-col font-medium">
                <p className="m-0">{address.name}</p>
                <p className="m-0">{address.phone}</p>
                <div>
                  <span>{address.addressLine1}</span>
                  <span>{address.city}</span>
                  <span>{address.state}</span> - <span>{address.pincode}</span>
                </div>
              </div>
              <div className="flex center">
                <button
                  onClick={() => setCheckoutStep("address")}
                  className="transparent border radius-sm"
                >
                  Change
                </button>
              </div>
            </div>
          )}

      {showAddressFrom ? (
        <div className="p-2">
          <AddressForm setShowAddressForm={setShowAddressForm} />
        </div>
      ) : (
        checkoutStep === "address" && (
          <div className="border flex p-2 items-center">
            <BsPlus color="red" size={20} />
            <button
              className="transparent text-red"
              onClick={() => setShowAddressForm(true)}
            >
              ADD A NEW ADDRESS
            </button>
          </div>
        )
      )}
    </CheckoutContainer>
  );
};
