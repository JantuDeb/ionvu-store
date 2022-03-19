import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axiosInstance from "../../utils/axios-instance";
import {
  composeFilterFunc,
  filterCategory,
  filterPrice,
  filterRating,
  sortProduct,
} from "../../utils/filters";
import { initialState, productReducer } from "./product-reducer";
const ProductContext = createContext([]);
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get("/products");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filterProducts = composeFilterFunc(
    productState,
    sortProduct,
    filterCategory,
    filterRating,
    filterPrice
  )(products);

  console.log(productState);
  return (
    <ProductContext.Provider
      value={{ products: filterProducts, productState, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
