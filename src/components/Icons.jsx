import React from "react";

function Icons({ icon, title = "" }) {
  return (
    <span
      className="bg-white mr-2 rounded-full w-8 h-8 p-1 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
      role="button"
      aria-label={title}
      title={title}
    >
      <i className={`${icon} text-slate-900 text-xl hover:text-white`}></i>
    </span>
  );
}

export default Icons;
