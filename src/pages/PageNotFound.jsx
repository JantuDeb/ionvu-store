import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="fof">
      <h1>Error 404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="text-blue">Go To Home</Link>
    </div>
  );
};
