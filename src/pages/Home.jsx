import React from "react";
// import Banner from "../components/home/banner/Banner";
import Categories from "../components/home/category/Categories";
import { CategoryProvider } from "../context/category/CategoryContext";
// import Trending from "../components/home/trending/Trending";

const Home = () => {
  return (
    <CategoryProvider>
      <Categories />
      {/* <Banner /> */}
      {/* <Trending /> */}
    </CategoryProvider>
  );
};

export default Home;
