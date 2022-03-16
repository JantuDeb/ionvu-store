import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import axiosInstance from "../../../utils/axios-instance";
import Loading from "../../shared/Loading";
import Error from "../../shared/Error";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get("/categories");
        setCategories(data.categories);
        setStatus({ loading: false, error: "" });
      } catch (error) {
        setStatus({ loading: false, error: error.message });
      }
    })();
  }, []);

  return (
    <section className="flex wrap categories py-4 justify-center">
      {/* show loading */}
      {status.loading && <Loading />}

      {/* show error */}
      {status.error !== "" && (
        <Error error={`Failed to load category: ${status.error}`} />
      )}

      {/* show categories */}
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
