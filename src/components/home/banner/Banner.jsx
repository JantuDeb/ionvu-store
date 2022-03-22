import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="flex-col wrap conainer-box mx-2 justify-center banner">
      <div className="left-box">
        <img
          src="./assets/images/blue-shield-comp.webp"
          alt="blue-shield-glasses"
          className="img-fluid"
        />
      </div>
      <div className="right-box border items-start">
        <h2>Blue Shield Computer Glasses</h2>
        <p>
          We have the perfect screen time companion for you, which reduces eye
          strain, fatigue and blocks harmful blue light. Enjoy your screen time
          without any guilt, at just Rs. 899 onward!
        </p>
        <Link to="/products?category=Computer Glasses" className="btn-red radius-md px-2 py-1">Shop Now</Link >
      </div>
    </section>
  );
};

export default Banner;
