import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import IconWrapper from "../IconWrapper";
const NavMenu = ({ setShowNavMenu }) => {
  return (
    <div className="nav-menu shadow-gray bg-white flex-col p-4">
      <div className="flex justify-between px-3">
        <div className="flex-col items-center">
          <IconWrapper>
            <BsPersonCircle size={40} />
          </IconWrapper>
          <p>Login</p>
        </div>
        <IconWrapper>
          <MdOutlineClose
            size={20}
            onClick={() => setShowNavMenu((show) => !show)}
          />
        </IconWrapper>
      </div>
      <ul className="list-unstyled">
        <li className="nav-list-item">Computer Glasses</li>
        <li className="nav-list-item">Reading Glasses</li>
        <li className="nav-list-item">Eyeglasses</li>
        <li className="nav-list-item">Sunglasses</li>
        <li className="nav-list-item">Contact Lenses</li>
      </ul>
    </div>
  );
};

export default NavMenu;
