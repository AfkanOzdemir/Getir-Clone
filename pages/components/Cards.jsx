import { useState, useEffect } from "react";
import { MainContext, useContext } from "../Context";
import CardsUi from "./ui/Cardsui";

const Cards = () => {
  const { card, setCard } = useContext(MainContext);

  useEffect(() => {
    setCard(card);
  }, []);

  return (
    <section className="py-4 bg-white mt-14">
      <div className="container mx-auto">
        <div className="flex items-center justify-center col col-span-3">
          {card &&
            card.map((value, index) => (
              <CardsUi key={index} card={value} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
