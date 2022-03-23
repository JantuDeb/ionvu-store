import React, { useEffect } from "react";
import Banner from "../components/home/banner/Banner";
import Categories from "../components/home/category/Categories";
import TaggedProductList from "../components/home/TaggedProductList";
import { CategoryProvider } from "../context/category/CategoryContext";
import { useProducts } from "../context/products/ProductContext";

const Home = () => {
  const { loadProducts } = useProducts();
  useEffect(() => loadProducts(), []);

  return (
    <CategoryProvider>
      <Categories />
      <Banner />
      <TaggedProductList tag="Trending" title="What’s Trending Now" />
      <TaggedProductList tag="New" title="New Arrivals" />
    </CategoryProvider>
  );
};

export default Home;
