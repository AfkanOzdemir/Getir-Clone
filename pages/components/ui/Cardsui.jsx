import React, { useState } from "react";
const Cardsui = ({ card: { image, title, text, id } }) => {
  return (
    <div className = "flex w-full items-center justify-between flex-col">
      <img className = "flex items-center justify-center text-center h-32" src={image} alt={id}></img>
      <h3 className="card-title mt-7  text-center font-openSans text-brand-color font-semibold text-lg">{title}</h3>
      <p className="card-text mt-4 w-3/4 flex items-center justify-center text-center font-openSans text-cardText">{text}</p>
    </div>
  );
};

export default Cardsui;
