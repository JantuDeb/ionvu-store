import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect
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

  const loadProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => loadProducts(), []);

  const filterProducts = composeFilterFunc(
    productState,
    sortProduct,
    filterCategory,
    filterRating,
    filterPrice
  )(products);

  return (
    <ProductContext.Provider
      value={{ products: filterProducts, productState, productDispatch , loadProducts}}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
