import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import FoodData from "../../data/getiryemek/Foods.json";
import { MainContext, useContext } from "../Context";

const CustomSlider = () => {
  const { getirYemekComponent, setgetirYemekComponent } =
    useContext(MainContext);
  useEffect(() => {
    setgetirYemekComponent(getirYemekComponent);
  }, []);
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 text-darkGray">Mutfaklar</h3>
        <Swiper
          centeredSlides={false}
          spaceBetween={50}
          slidesPerView={8}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex"
        >
          {FoodData &&
            FoodData.map((value, index) => (
              <SwiperSlide key={index} category={value}>
                <a href={value.link}>
                  <img
                    className="flex items-center justify-center text-center"
                    src={value.image}
                    alt={value.id}
                  ></img>
                  <h3 className="card-title mt-5  text-center font-openSans text-brand-color font-semibold text-xs">
                    {value.title}
                  </h3>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomSlider;
