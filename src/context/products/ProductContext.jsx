import React, { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../../utils/axios-instance";
const ProductContext = createContext([]);
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get("/products");
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(products);
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
