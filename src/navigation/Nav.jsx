import React, { useState } from "react";
import { navbar } from "./css/navigation";
import { Link } from "react-router-dom";

function Nav() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center px-4 py-4 bg-white shadow-sm">
      {/* Left: Category + Links */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="w-full md:w-auto flex justify-between items-center">
          <button className="bg-slate-900 p-3 rounded-md text-white text-sm font-semibold w-full md:w-auto">
            <i className="fa-solid fa-table-cells-large mr-2"></i>Browse
            Category
            <i className="ml-1 fa-solid fa-angle-down"></i>
          </button>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl ml-4"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:ml-4 mt-3 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link className={navbar.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navbar.navLink} to="/offers">
              Offer
            </Link>
          </li>
          <li>
            <Link className={navbar.navLink} to="#">
              Daily Deal
            </Link>
          </li>
          <li>
            <Link className={navbar.navLink} to="#">
              Flat Sale
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Contact & Cart */}
      <div className="flex flex-col md:flex-row items-center gap-3 mt-4 md:mt-0">
        <button
          className="text-blue-900 text-sm md:text-base font-semibold"
          onClick={() => alert("Contact us")}
        >
          <i className="fa-solid fa-headset mr-1"></i> +92 300 1234567
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 font-semibold py-2 px-3 text-white rounded-lg"
        >
          <i className="fa-solid fa-bag-shopping mr-2"></i> My Cart ({count})
        </button>
      </div>
    </nav>
  );
}

export default Nav;
