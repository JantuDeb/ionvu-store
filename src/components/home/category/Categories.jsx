import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import Loading from "../../shared/Loading";
import Error from "../../shared/Error";
import { useCategory } from "../../../context/category/CategoryContext";

const Categories = () => {
  const { categories, status, loadCategory } = useCategory();
  useEffect(() => loadCategory(), []);

  return (
    <section className="flex wrap categories py-4 justify-center">
      {status.loading && <Loading />}
      {status.error !== "" && (
        <Error error={`Failed to load category: ${status.error}`} />
      )}
      {categories.map((cat) => (
        <Link
          key={cat._id}
          to={`/products?category=${cat.name}`}
          className="card m-1 radius-md text-center category-card"
        >
          <img
            src={cat.photo.secure_url}
            className="img-fluid radius-md"
            alt="eye glasses"
          />
          <p className="font-medium text-gray">{cat.name}</p>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
