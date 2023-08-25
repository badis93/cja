import React from "react";
import Carousel from "./components/Carousel";
import SponsorSwiper from "./components/SponsorSwiper";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel />

      <SponsorSwiper />
    </>
  );
};

export default Home;
