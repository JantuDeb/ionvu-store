import {axiosInstance} from "../../utils/axios-instance";
import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const CategoryContext = createContext([]);
const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  const loadCategory = async () => {
    try {
      const { data } = await axiosInstance.get("/categories");
      setCategories(data.categories);
      setStatus({ loading: false, error: "" });
    } catch (error) {
      setStatus({ loading: false, error: error.message });
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategory();
  }, []);


  return (
    <CategoryContext.Provider value={{ categories, loadCategory, status }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export { CategoryProvider, useCategory };
