import React from "react";
import CardImg1 from "../assets/overnight_diapers_size_6-cover.png";
import CardImg2 from "../assets/red_tomato-cover.png";
import CardImg3 from "../assets/cauliflower-cover.png";
import CardImg4 from "../assets/beef_meat-cover.png";
import CardImg5 from "../assets/chicken_breast_tenderloins-cover.png";

function Trending() {
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
    <div className="px-4 py-10">
      <h1 className="font-bold text-4xl mb-6">Trending Items</h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Card.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="rounded w-full h-40 object-contain"
            />
            <p className="font-semibold mt-2 text-sm">{item.title}</p>
            <p className="text-xs text-gray-500">{item.text}</p>
            <p className="text-green-500 font-bold text-base">
              {item.price}{" "}
              <span className="line-through text-gray-400 text-sm">
                {item.disprice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
