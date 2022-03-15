import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Categories = () => {
  const images = [
    { path: "eyeg.jpg", title: "Eyeglasses" },
    { title: "Contact Lenses", path: "clg.jpg" },
    { path: "ceg.jpg", title: "Computer Glasses" },
    { path: "psg3.jpg", title: "Reading Glasses" },
    { path: "readg.jpg", title: "Power Sunglasses" },
  ];
  return (
    <section className="flex wrap categories py-4 justify-center">
      {images.map((cat) => (
        <Link
          to={`/products?category=${cat.title}`}
          className="card m-1 radius-md text-center category-card"
        >
          <img
            src={`./assets/category-icons/${cat.path}`}
            className="img-fluid radius-md"
            alt="eye glasses"
          />
          <p className="font-medium text-gray">{cat.title}</p>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
