import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth/AuthContext";
import Input from "../shared/Input";
import Button from "../loader/Button";
const AddressForm = ({ setShowAddressForm }) => {
  const initialAddressState = {
    name: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    addressType: "HOME",
    addressLine1: "",
  };
  const [address, setAddress] = useState(initialAddressState);
  const [loading, setLoadig] = useState(false);
  const { addAddress } = useAuth();

  const { name, city, state, pincode, phone, addressLine1 } = address;
  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  }

  async function addAddressHandler() {
    if (!name || !city || !state || !pincode || !phone || !addressLine1) {
      return toast.error("All the fields are required");
    }
    setLoadig(true);
    await addAddress(address);
    setLoadig(false);
    setAddress(initialAddressState);
    setShowAddressForm(false);
  }

  return (
    <div>
      <form className="address-form">
        <div className="flex gap-2">
          <Input
            inputChangeHandler={inputChangeHandler}
            name="name"
            value={name}
            placeholder="Name"
          />
          <Input
            inputChangeHandler={inputChangeHandler}
            name="city"
            value={city}
            placeholder="City"
          />
        </div>
        <div className="flex gap-2">
          <Input
            inputChangeHandler={inputChangeHandler}
            name="state"
            value={state}
            placeholder="State"
          />
          <Input
            inputChangeHandler={inputChangeHandler}
            name="pincode"
            value={pincode}
            placeholder="Pincode"
          />
        </div>
        <div className="flex items-start gap-2">
          <Input
            inputChangeHandler={inputChangeHandler}
            name="phone"
            value={phone}
            placeholder="Phone"
          />
          <div className="my-2 w-full">
            <p>Address Type</p>
            <div className="flex gap-2">
              <div className="flex center gap-1">
                <input
                  onChange={inputChangeHandler}
                  name="addressType"
                  value="HOME"
                  id="home"
                  type="radio"
                />
                <label htmlFor="home">HOME</label>
              </div>
              <div className="flex center gap-1">
                <input
                  onChange={inputChangeHandler}
                  name="addressType"
                  value="WORK"
                  type="radio"
                  id="work"
                />
                <label htmlFor="work">WORK</label>
              </div>
            </div>
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="address" className="my-1">
            Address
          </label>
          <textarea
            onChange={inputChangeHandler}
            name="addressLine1"
            value={addressLine1}
            id="address"
            placeholder="Address"
            className="w-full my-1 p-1"
          />
        </div>
      </form>
      <div className="flex gap-2">
        <Button
          btnStyle="btn btn-red py-2 px-6 radius-sm"
          clickHandler={addAddressHandler}
          text="SAVE"
          loading={loading}
          disable={loading}
        />
        <button
          className="btn btn-red py-2 px-6 radius-sm"
          onClick={() => setShowAddressForm(false)}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
