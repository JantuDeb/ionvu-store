import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Account = () => {
  return (
    <div className="container">
      <nav className="nav-links">
        <NavLink to="/account/profile" className="list-item">
          Profile
        </NavLink>
        <NavLink to="/account/address" className="list-item">
          Address
        </NavLink>
        <NavLink to="/account/order" className="list-item">
          Order
        </NavLink>
      </nav>
      <main className="main-account flex center">
        <Outlet />
      </main>
    </div>
  );
};
