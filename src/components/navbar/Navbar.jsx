import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import IconWrapper from "../shared/IconWrapper";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useProducts } from "../../context/products/ProductContext";
const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { cartState , wishlistState} = useProducts();
  return (
    <header className="header bg-white shadow-gray">
      {showNavMenu && <NavMenu setShowNavMenu={setShowNavMenu} />}
      <nav className="flex justify-between items-center px-4 navbar">
        <IconWrapper>
          <GiHamburgerMenu
            size={30}
            cursor="pointer"
            onClick={() => setShowNavMenu((show) => !show)}
          />
        </IconWrapper>
        <div className="flex">
          <div className="mx-2">
            <IconWrapper>
              <FiSearch size={20} cursor="pointer" />
            </IconWrapper>
          </div>
          <Link to="/wishlist" className="badge-icon mx-2">
            <IconWrapper>
              <FiHeart size={20} />
            </IconWrapper>
            {wishlistState?.length !== 0 && (
              <div className="badge-icon-count bg-red">{wishlistState.length}</div>
            )}
          </Link>
          <Link to="/cart" className="badge-icon mx-2">
            <IconWrapper>
              <BsBag size={20} />
            </IconWrapper>
            {cartState?.length !== 0 && (
              <div className="badge-icon-count bg-red">{cartState.length}</div>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
