import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useAuth } from "../../context/auth/AuthContext";
import DropDownMenu from "../shared/dropdown/DropDownMenu";
import AddressForm from "./AddressForm";
export const Address = () => {
  const [showAddressFrom, setShowAddressForm] = useState(false);
  const { addresses, getAddresses, deleteAddress } = useAuth();

  useEffect(() => {
    addresses.length === 0 && getAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  return (
    <div className="bg-white address-box flex-col wrap p-2 gap-2">
      <div className="border flex p-2 items-center">
        <BiPlus color="red" size={20} />{" "}
        <button
          className="transparent text-red"
          onClick={() => setShowAddressForm(true)}
        >
          ADD A NEW ADDRESS
        </button>
      </div>

      {showAddressFrom && <AddressForm setShowAddressForm={setShowAddressForm} />}
      {addresses.map((address) => {
        return (
          <div key={address._id} className="flex-col border p-2 gap-1">
            <div className="flex justify-between">
              <span className="address-type">{address.addressType}</span>
              <DropDownMenu>
                <li className="list-item p-1">Edit</li>
                <li className="list-item p-1" onClick={()=>deleteAddress(address._id)}>Delete</li>
              </DropDownMenu>
            </div>
            <div className="flex gap-2 font-medium">
              <p className="m-0">{address.name}</p>{" "}
              <p className="m-0">{address.phone}</p>
            </div>
            <div>
              <span>{address.addressLine1}</span> <span>{address.city}</span>
              <span>{address.state}</span> - <span>{address.pincode}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
