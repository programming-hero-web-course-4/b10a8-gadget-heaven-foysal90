import { FaCartPlus } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

import { useCart } from "../../utility/CartContext";

const Navbar = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  const { cartItemsCount, wishlistCount } = useCart(); // Destructure wishlistCount from context

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div
        className={`navbar ${
          homePage ? "bg-[#9538E2] text-white" : "bg-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="gap-5 text-white  bg-purple-600 dropdown-content rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost  text-xl">
            GadgetHive
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end gap-x-2">
          <NavLink className="btn btn-md rounded-full bg-white relative">
            <FaCartPlus className="text-sm" />
            <span className="absolute top-[-5px] right-[-10px] bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center font-extrabold text-xs">
              {cartItemsCount}
            </span>
          </NavLink>
          <NavLink className="btn btn-md rounded-full bg-white relative">
            <FcLike className="text-sm" />
            <span className="absolute top-[-5px] right-[-10px] bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center font-extrabold text-xs">
              {wishlistCount} 
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
