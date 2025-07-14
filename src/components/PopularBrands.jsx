import React from "react";
import CateImage1 from "../assets/dove-cover.png";
import CateImage2 from "../assets/great_value-cover.png";
import CateImage3 from "../assets/nature_valley-cover.png";
import CateImage4 from "../assets/oxi_clean-cover.png";
import CateImage5 from "../assets/pampers-cover.png";
import CateImage6 from "../assets/suave-cover.png";

function Popular() {
  const PopularData = [
    { Image: CateImage1, text: "Dove" },
    { Image: CateImage2, text: "Great Value" },
    { Image: CateImage3, text: "Natural Valley" },
    { Image: CateImage4, text: "Oxi Clean" },
    { Image: CateImage5, text: "Pampers" },
    { Image: CateImage6, text: "Suave" },
  ];

  const BrandsData = [
    {
      Icon: "fa-solid fa-heart",
      title: "Quality & Savings",
      text: "Comprehensive quality control and affordable prices",
    },
    {
      Icon: "fa-solid fa-truck-fast",
      title: "Fast Delivery",
      text: "Comprehensive quality control and affordable prices",
    },
    {
      Icon: "fa-solid fa-money-check-dollar",
      title: "Secure Payment",
      text: "Comprehensive quality control and affordable prices",
    },
    {
      Icon: "fa-brands fa-usps",
      title: "Professional Service",
      text: "Comprehensive quality control and affordable prices",
    },
  ];

  return (
    <div className="px-4">
      <h1 className="font-bold text-3xl md:text-4xl py-6 mb-6">
        Popular Brands
      </h1>

      <div className="flex flex-wrap justify-center gap-4 border-b border-gray-100 pb-6">
        {PopularData.map((item, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[15%] bg-white flex flex-col items-center border rounded-md p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={item.Image}
              alt={item.text}
              className="w-[50%] py-4 transition-transform duration-300 transform hover:rotate-6"
            />
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 pt-10 my-12 border-t-2">
        {BrandsData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[22%] flex items-start gap-3 p-3"
          >
            <i className={`${item.Icon} text-green-500 text-xl mt-1`}></i>
            <div>
              <h2 className="font-semibold text-base">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
