import React from "react";
import ImgFooter from "../assets/theme-footer-logo.png";
import Icons from "./Icons";

function Footer() {
  const support = [
    { title: "Support" },
    { text: "FAQ" },
    { text: "Return & Exchange" },
    { text: "Delivery" },
    { text: "Contact us" },
  ];

  const legal = [
    { title: "Legal" },
    { text: "About Us" },
    { text: "Cookie Policy" },
    { text: "Terms & Conditions" },
    { text: "Privacy Policy" },
  ];

  const contact = [
    { title: "Contact" },
    {
      icon: "fa-solid fa-location-dot",
      text: "House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "info@inilabs.net",
    },
    {
      icon: "fa-solid fa-phone",
      text: "+8801333384628",
    },
  ];

  return (
    <div className="bg-slate-900 py-6 px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-slate-700 pb-6 gap-6">
        <div className="w-full md:w-1/3">
          <img src={ImgFooter} alt="Footer Logo" className="w-28 mb-3" />
          <p className="text-white font-medium text-sm">
            Subscribe to our newsletter
          </p>
          <div className="flex p-[2px] rounded-full bg-white pl-3 justify-between my-3">
            <input
              className="outline-none bg-transparent border-none text-sm p-[2px] text-black w-full"
              type="text"
              placeholder="User email address"
            />
            <button className="bg-green-500 p-2 px-3 rounded-full text-white font-normal text-sm ml-2">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3">
            <Icons icon="fa-brands fa-facebook" />
            <Icons icon="fa-brands fa-instagram" />
            <Icons icon="fa-brands fa-x-twitter" />
            <Icons icon="fa-brands fa-youtube" />
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-4">
          <NavItems items={support} />
          <NavItems items={legal} />
          <NavItems items={contact} />
        </div>
      </div>

      <p className="text-center text-white text-sm mt-4">
        © StoreKing by Zaeem Shakeel 2025, All Rights Reserved
      </p>
    </div>
  );
}

const NavItems = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <div key={index} className="mb-2">
        {item.title && (
          <h3 className="text-white font-semibold text-lg mb-2">
            {item.title}
          </h3>
        )}
        {item.text && (
          <div className="flex items-start gap-2">
            {item.icon && <i className={`${item.icon} text-white mt-[2px]`} />}
            <p className="text-white text-sm hover:text-green-500 cursor-pointer max-w-xs">
              {item.text}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Footer;
