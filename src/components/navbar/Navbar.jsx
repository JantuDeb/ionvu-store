import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import IconWrapper from "../shared/IconWrapper";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useProducts } from "../../context/products/ProductContext";
import { useAuth } from "../../context/auth/AuthContext";
const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { cartState, wishlistState } = useProducts();

  const { authState, logOut } = useAuth();
  console.log(authState);
  return (
    <header className="header bg-white shadow-gray">
      {showNavMenu && <NavMenu setShowNavMenu={setShowNavMenu} />}
      <nav className="flex justify-between items-center px-4 navbar">
        <div className="profile-desktop">
        <Link to="/" className="text-red font-bold radius-md px-2 py-1">
        IONVU
        </Link>
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
          {authState.isLogedIn ? (
            <div className="dropdown flex justify-center">
              <span className="font-bold">{authState.user.name}</span>
              <ul className="dropdown-menu list-unstyled">
                <li className="list-item">Profile</li>
                <li className="list-item">Orders</li>
                <li className="list-item">Addresses</li>
                <li className="list-item" onClick={() => logOut()}>
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn-grad-red radius-md py-1 px-2 flex center"
            >
              Login
            </Link>
          )}
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
              <div className="badge-icon-count bg-red">
                {wishlistState.length}
              </div>
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
