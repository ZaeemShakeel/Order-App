import React from "react";
import CardImg1 from "../assets/overnight_diapers_size_6-cover.png";
import CardImg2 from "../assets/red_tomato-cover.png";
import CardImg3 from "../assets/cauliflower-cover.png";
import CardImg4 from "../assets/beef_meat-cover.png";
import CardImg5 from "../assets/chicken_breast_tenderloins-cover.png";

function Flash() {
  const cardData = [
    {
      Image: CardImg1,
      title: "Overnight Diapers Size 6",
      text: "Packet",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg2,
      title: "Red Tomato",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg3,
      title: "Cauliflower",
      text: "Piece",
      price: "$45.250",
      disprice: "$50.000",
    },
    {
      Image: CardImg4,
      title: "Red Meat",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg5,
      title: "Chicken",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg2,
      title: "Red Tomato",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg1,
      title: "Overnight Diapers Size 6",
      text: "Packet",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg4,
      title: "Red Meat",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg5,
      title: "Chicken",
      text: "Kilogram",
      price: "$33.250",
      disprice: "$35.000",
    },
    {
      Image: CardImg3,
      title: "Cauliflower",
      text: "Piece",
      price: "$45.250",
      disprice: "$50.000",
    },
  ];

  return (
    <div className="py-10 px-4">
      <h1 className="font-bold text-3xl sm:text-4xl mb-6">Flash Sale</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-3 flex flex-col items-center text-center hover:shadow-md transition"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="rounded w-full h-36 object-contain mb-2"
            />
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <p className="text-lg font-bold text-green-500 mt-1">
              {item.price}{" "}
              <span className="line-through text-gray-400 text-sm ml-1">
                {item.disprice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flash;
