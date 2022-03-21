import React from "react";
import Product from "../components/products/Product";
import NoItemsDialog from "../components/shared/NoItemsDialog";
import { useProducts } from "../context/products/ProductContext";

const Wishlist = () => {
  const { wishlistState } = useProducts();
  return wishlistState?.length === 0 ? (
    <NoItemsDialog
      title="Empty Wishlist"
      description="You have no items in your wishlist. Start adding!"
    />
  ) : (
    <div className="flex-col shadow-gray grow m-2">
      <div className=" flex justify-between p-2">
        <h4> My Wishlist ({wishlistState?.length})</h4>
      </div>
      <div className="flex wrap center products">
        {wishlistState.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
