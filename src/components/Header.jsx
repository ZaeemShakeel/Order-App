import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import ImgFlag from "../assets/english.png";
import Image from "../assets/theme-logo-black.png";
import { header } from "./css/header";
import Dropdown from "./Dropdown";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${header.container} flex flex-col md:flex-row md:justify-between items-center px-4 py-3 gap-4 md:gap-0`}
    >
      <img src={Image} className="w-24" alt="Logo" />

      <div
        className={`${header.search} flex items-center bg-white px-3 py-1 rounded-md w-full md:w-[40%]`}
      >
        <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
        <input
          type="text"
          className={`${header.input} flex-grow text-sm focus:outline-none`}
          placeholder="Search product ..."
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto justify-between text-sm">
        <button
          onClick={() => setShow(!show)}
          className="flex items-center text-black hover:text-green-600 relative"
        >
          <img src={ImgFlag} className="w-6 h-6 mr-1" alt="flag" />
          English
          <i className="fa-solid fa-angle-down ml-1"></i>
          {show && <Dropdown />}
        </button>

        <p className="flex items-center text-black hover:text-green-600">
          <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1">
            <i className="fa-regular fa-heart text-white text-base"></i>
          </span>
          Favorite
        </p>

        {/* ✅ Fixed: replaced <a> with <Link> */}
        <Link
          to="/login"
          className="flex items-center text-black hover:text-green-600"
        >
          <span className="w-7 h-7 bg-green-500 rounded-full flex justify-center items-center mr-1">
            <i className="fa-regular fa-user text-white text-base"></i>
          </span>
          Account
        </Link>
      </div>
    </div>
  );
}

export default Header;
