import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Subfooter = () => {
  const [language , setLanguage] = (["Türkçe(TR)"])
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="font-openSans text-xs text-darkGray">© 2022 Getir</p>
            <span className="mx-3 border-[1px] border-solid border-brand-color w-1 h-1 bg-brand-color rounded-full"></span>
            <a href="#" className="font-openSans text-xs text-brand-color">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <div className="h-full flex items-center justify-center">
            <a href="#" className="mx-4">
              <FaFacebook className="text-xl text-hero hover:text-brand-color" />
            </a>
            <a href="#" className="mx-4">
              <FaTwitter className="text-xl text-hero hover:text-brand-color" />
            </a>
            <a href="#" className="mx-4">
              <FaInstagram className="text-xl text-hero hover:text-brand-color" />
            </a>
            <a href="#" className="flex items-center justify-center mx-4 text-base text-hero hover:text-brand-color"><MdLanguage className="mr-2"/>{language}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subfooter;
