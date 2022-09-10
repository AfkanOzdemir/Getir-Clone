import React, { useState } from "react";
const Categoryui = ({ category: { image, name, link, id } }) => {
  return (
    <a href={link} className={`category w-full h-full text-darkGray  hover:text-brand-color`}>
      <div className={`w-full flex items-center justify-center flex-col mb-3`}>
        <img src={image} alt = {id} className="mb-5 w-12 h-12" />
        <span className={`text-sm font-openSans font-semibold whitespace-nowrap`}>
          {name}
        </span>
      </div>
    </a>
  );
};

export default Categoryui;
