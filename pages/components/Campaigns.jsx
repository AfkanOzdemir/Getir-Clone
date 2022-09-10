import { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { MainContext, useContext } from "../Context";

const Campaigns = () => {
  const { campagins, setCampagins } = useContext(MainContext);

  useEffect(() => {
    setCampagins(campagins);
  }, []);

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 text-darkGray ">
          Kampanyalar
        </h3>
        <Swiper
          centeredSlides={false}
          spaceBetween={20}
          slidesPerView={3}
          freeMode={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex"
        >
          {campagins &&
            campagins.map((value, index) => (
              <SwiperSlide key={index} campagin={value} className="w-auto h-auto">
                <a className="w-auto h-auto mr-5 last:mr-0" href={value.link}>
                  <img
                    src={value.image}
                    alt={value.id}
                    className="rounded-lg contain"
                  ></img>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Campaigns;
