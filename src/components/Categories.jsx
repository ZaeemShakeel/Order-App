import React from "react";
import CateImage1 from "../assets/food-thumb.png";
import CateImage2 from "../assets/fruits_&_vegetables-thumb.png";
import CateImage3 from "../assets/fresh_vegetables-thumb.png";
import CateImage4 from "../assets/fresh_fruits-thumb.png";
import CateImage5 from "../assets/nuts_&_dry_fruits-thumb.png";
import CateImage6 from "../assets/meat_&_fish-thumb.png";

import OfferBanners1 from "../assets/collected_from_garden-cover.jpg";
import OfferBanners2 from "../assets/seasonal_fruits-cover.jpg";
import OfferBanners3 from "../assets/special_offer_on_seafood-cover.jpg";

function Categories() {
  const CategoriesData = [
    { Image: CateImage1, text: "Food" },
    { Image: CateImage2, text: "Fruits & Vegetables" },
    { Image: CateImage3, text: "Fresh Vegetables" },
    { Image: CateImage4, text: "Fresh Fruits" },
    { Image: CateImage5, text: "Nuts & Dry Fruits" },
    { Image: CateImage6, text: "Meat & Fish" },
  ];

  const BannerData = [OfferBanners1, OfferBanners2, OfferBanners3];

  return (
    <div className="py-10 px-4">
      <h1 className="font-bold text-3xl sm:text-4xl mb-8">
        Browse by Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {CategoriesData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 flex flex-col items-center text-center rounded-md p-4 transition-all duration-300 transform hover:shadow-md hover:scale-105 group"
          >
            <img
              src={item.Image}
              alt={item.text}
              className="w-16 sm:w-20 md:w-24 py-2 transition-all duration-300 transform group-hover:rotate-6"
            />
            <p className="text-sm sm:text-base font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {BannerData.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt="offer banner"
            className="w-full h-auto rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
