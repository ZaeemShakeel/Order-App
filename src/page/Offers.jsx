import React from "react";
import ImgFooter from "../assets/theme-footer-logo.png";
import CardImg1 from "../assets/overnight_diapers_size_6-cover.png";
import CardImg2 from "../assets/red_tomato-cover.png";
import CardImg3 from "../assets/cauliflower-cover.png";
import CardImg4 from "../assets/beef_meat-cover.png";
import CardImg5 from "../assets/chicken_breast_tenderloins-cover.png";
import LastBanner from "../assets/buy_fresh_&_organic_sea_food-preview.jpg";

function Offers() {
  const Card = [
    {
      Image: CardImg1,
      title: "Overnight Diapers Size 6",
      text: "Packet",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg2,
      title: "Red Tomato",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg3,
      title: "Cauliflower",
      text: "Piece",
      price: "$45.250",
      disprice: "50.000",
    },
    {
      Image: CardImg4,
      title: "Red Meat",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg5,
      title: "Chicken",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg2,
      title: "Red Tomato",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg1,
      title: "Overnight Diapers Size 6",
      text: "Packet",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg4,
      title: "Red Meat",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg5,
      title: "Chicken",
      text: "Kilogram",
      price: "$33.250",
      disprice: "35.000",
    },
    {
      Image: CardImg3,
      title: "Cauliflower",
      text: "Piece",
      price: "$45.250",
      disprice: "50.000",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-10 ml-4 p-3">
        Offer Products{" "}
        <span className="font-medium text-lg sm:text-xl">
          (30 Products Found)
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Card.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="rounded w-full h-48 object-contain"
            />
            <p className="mt-2 font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <p className="text-lg font-bold text-green-500">
              {item.price}
              <span className="line-through text-gray-400 text-sm ml-2">
                {item.disprice}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="my-10">
        <img
          src={LastBanner}
          alt="Offer Banner"
          className="rounded-[40px] w-full p-4"
        />
      </div>
    </>
  );
}

export default Offers;
