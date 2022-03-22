import React, { createContext, useContext, useState, useReducer } from "react";
import axiosInstance from "../../utils/axios-instance";
import {
  composeFilterFunc,
  filterCategory,
  filterPrice,
  filterRating,
  sortProduct,
} from "../../utils/filters";
import { cartReducer } from "./cart-reducer";
import { initialState, productReducer } from "./product-reducer";
import { wishlistReducer } from "./wishlist-reducer";
const ProductContext = createContext([]);
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  const loadProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  const filterProducts = composeFilterFunc(
    productState,
    sortProduct,
    filterCategory,
    filterRating,
    filterPrice
  )(products);

  return (
    <ProductContext.Provider
      value={{
        products,
        filterProducts,
        productState,
        productDispatch,
        loadProducts,
        cartDispatch,
        cartState,
        wishlistState,
        wishlistDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
