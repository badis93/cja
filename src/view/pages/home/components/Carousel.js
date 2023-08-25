import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img
            src={require("../../../../img/2.jpg")}
            style={{ width: "100%", height: "800px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/3.jpg")}
            style={{ width: "100%", height: "800px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/1.jpg")}
            style={{ width: "100%", height: "800px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
