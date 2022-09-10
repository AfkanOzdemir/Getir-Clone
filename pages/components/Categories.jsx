import React, { useState, useEffect } from "react";
import Categoryui from "./ui/Categoryui";
import {MainContext , useContext} from "../Context";
const Categories = () => {
  const {categories, setCategories} = useContext(MainContext);
  useEffect(() => {
    setCategories(categories);
  }, []);

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 text-darkGray">Kategoriler</h3>
        <div className="grid grid-cols-10">
        {categories && categories.map((category, index) => <Categoryui key={index} category={category} />)}
        </div>
      </div>
    </section>
  );
};
export default Categories;
