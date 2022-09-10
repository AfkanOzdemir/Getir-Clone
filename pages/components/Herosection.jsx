/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ReactFlagsSelect from "react-flags-select";
import { MainContext, useContext } from "../Context";
const Herosection = () => {
  const { heroData, setHeroData } = useContext(MainContext);
  useEffect(() => {
    setHeroData(heroData);
  }, []);

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroData &&
          heroData.map((value, index) => (
            <SwiperSlide key={index} category={value}>
              <img
                className="w-full object-container"
                src={value.image}
                alt={value.id}
              ></img>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="w-full h-full absolute bottom-0 top-0 flex items-center justify-center">
        <div className="w-10/12 h-full flex items-center justify-between">
          <div className="flex items-start justify-center w-auto h-full z-10 flex-col">
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
            <p className="text-white font-openSans mt-10 font-semibold text-4xl w-3/4">
              Dakikalar içinde kapınızda
            </p>
          </div>
          <div className="p-6 flex items-end justify-end bg-white w-96 flex-col position-relative z-10 rounded-md">
            <h5 className="text-brand-color text-base font-openSans text-center h-auto w-full mb-4 font-semibold">
              Giriş yap veya kayıt ol
            </h5>
            <form
              action=""
              className="w-full flex flex-col items-center justify-center"
            >
              <div className="grid gap-y-3">
                <div className="flex gap-x-2 mb-0:important">
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={(code) => setSelected(code)}
                    selected={selected}
                    className="flag-select"
                  />
                  <label className="flex-1 relative group block cursor-pointer mb-[5px]">
                    <input
                      required
                      className="h-full px-4 border-2 border-gray rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
                    />
                    <span className="text-hero absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs font-semibold">
                      Telefon Numarası
                    </span>
                  </label>
                </div>
              </div>
              <button className="font-medium button w-full h-11 pt-4 pb-4 pr-[14px] pl-[14px] rounded-md bg-brand-yellow flex items-center justify-center text-brand-color font-openSans mt-4 text-sm transition-all hover:text-brand-yellow hover:bg-brand-color">
                Telefon numarası ile devam et
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
