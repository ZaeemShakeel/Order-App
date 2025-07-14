import React from "react";

const Dropdown = () => {
  const countries = [
    { name: "PK", icon: "🇵🇰" },
    { name: "IN", icon: "🇮🇳" },
    { name: "UAE", icon: "🇦🇪" },
  ];

  return (
    <div className="border rounded-md p-2 bg-white w-24 absolute top-10 right-0 shadow-lg z-50">
      {countries.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 py-1 hover:bg-gray-100 cursor-pointer px-2 rounded"
        >
          <span className="text-lg">{item.icon}</span>
          <p className="text-black text-sm font-medium">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
