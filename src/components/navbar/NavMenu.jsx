import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import IconWrapper from "../IconWrapper";

const NavMenu = ({ setShowNavMenu }) => {
  const categories = [
    "Computer Glasses",
    "Reading Glasses",
    "Eyeglasses",
    "Sunglasses",
    "Contact Lenses",
  ];
  return (
    <div className="nav-menu shadow-gray bg-white flex-col p-4">
      <div className="flex justify-between px-3">
        <div className="flex-col items-center">
          <Link to="/" className="text-red font-bold radius-md px-2 py-1">
            IONVU
          </Link>
        </div>
        <IconWrapper>
          <MdOutlineClose
            size={20}
            onClick={() => setShowNavMenu((show) => !show)}
          />
        </IconWrapper>
      </div>
      <ul className="list-unstyled">
        {categories.map((cat) => (
          <li key={cat} className="nav-list-item">
            <Link to={`/products?category=${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
