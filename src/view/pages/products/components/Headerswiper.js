import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Headerswiper = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        speed={1500}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img
            src={require("../../../../img/c1.jpg")}
            style={{ width: "100%", height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/c2.jpg")}
            style={{ width: "100%", height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/c3.jpg")}
            style={{ width: "100%", height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/c4.jpg")}
            style={{ width: "100%", height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../../../img/c5.jpg")}
            style={{ width: "100%", height: "500px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Headerswiper;
