import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css/navigation";

import "./sponsorSwiper.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { FreeMode, Pagination } from "swiper/modules";

const SponsorSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
          <img
            src={require("../../../../img/2.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/3.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/1.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/2.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/3.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/1.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/2.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/3.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/1.jpg")}
            style={{ width: "200px", height: "200px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SponsorSwiper;
