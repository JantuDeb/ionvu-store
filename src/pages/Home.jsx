import React, { useEffect } from "react";
import Banner from "../components/home/banner/Banner";
import Categories from "../components/home/category/Categories";
import TaggedProductList from "../components/home/TaggedProductList";
import { useProducts } from "../context/products/ProductContext";

const Home = () => {
  const { loadProducts } = useProducts();
  useEffect(() => loadProducts(), []);

  return (
    <>
      <Categories />
      <Banner />
      <TaggedProductList tag="Trending" title="What’s Trending Now" />
      <TaggedProductList tag="New" title="New Arrivals" />
    </>
  );
};

export default Home;
