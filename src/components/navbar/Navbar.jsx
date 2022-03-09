import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import IconWrapper from "../IconWrapper";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="App-header">
      <nav className="flex justify-between items-center px-4 navbar">
        <IconWrapper>
          <GiHamburgerMenu size={30} cursor="pointer" />
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
            <div class="badge-icon-count bg-red">1</div>
          </Link>
          <Link to="/cart" className="badge-icon mx-2">
            <IconWrapper>
              <BsBag size={20} />
            </IconWrapper>
            <div class="badge-icon-count bg-red">1</div>
          </Link>
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;
