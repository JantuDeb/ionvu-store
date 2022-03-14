import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import IconWrapper from "../IconWrapper";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <header className="App-header">
      {showNavMenu && <NavMenu setShowNavMenu={setShowNavMenu} />}
      <nav className="flex justify-between items-center px-4 navbar">
        <div className="profile-desktop">
        <button className="btn-outline-danger radius-md px-2 py-1">
        Login
        </button>
        </div>
        <div className="nav-menu-icon">
          <IconWrapper>
            <GiHamburgerMenu
              size={30}
              cursor="pointer"
              onClick={() => setShowNavMenu((show) => !show)}
            />
          </IconWrapper>
        </div>
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
            <div className="badge-icon-count bg-red">1</div>
          </Link>
          <Link to="/cart" className="badge-icon mx-2">
            <IconWrapper>
              <BsBag size={20} />
            </IconWrapper>
            <div className="badge-icon-count bg-red">5</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
