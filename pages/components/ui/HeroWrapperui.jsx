import React, { useState } from "react";
const HeroWrapperui = ({ hero: { image, title, id } }) => {
  return (
    <div className="flex items-start justify-center w-auto h-full z-10 flex-col">
      <div className="w-[180px] h-[180px] flex justify-center items-center">
        <img src={image} alt={id} className="object-contain w-full h-full" />
      </div>
      <p className="text-white font-openSans mt-10 font-semibold text-4xl w-3/4">
        {title}
      </p>
    </div>
  );
};

export default HeroWrapperui;
