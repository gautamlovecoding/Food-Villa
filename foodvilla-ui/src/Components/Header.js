import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../constants";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../utils/cartSlice";

const Title = () => (
  <a href="/">
    <img className="h-28 p-3" alt="logo" src={LOGO_URL} />
  </a>
);

const Header = () => {
  const cartCount = useSelector(selectCartTotal);

  return (
    <div className="fixed top-0 w-full flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <nav className="nav-items">
        <ul className="flex py-10">
          <li className="px-2 hover:shadow-md hover:bg-pink-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:shadow-md hover:bg-pink-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 hover:shadow-md hover:bg-pink-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 hover:shadow-md hover:bg-pink-300">
            <Link to="/cart">Cart - {cartCount} items </Link>
          </li>
          <li className="px-2 hover:shadow-md hover:bg-pink-300">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center mr-7">
        <button className="mr-3 px-2 hover:shadow-md hover:bg-pink-300">
          <Link to="/user/signUp">SignUp</Link>
        </button>
        <button className="px-2 hover:shadow-md hover:bg-pink-300">
          <Link to="/user/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
