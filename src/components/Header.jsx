import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="header">
      <h1 className="left">Logo</h1>
      <div className="right">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>1</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
