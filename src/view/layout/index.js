import React from "react";
import Navbar from "./componets/Navbar";
import Content from "./componets/Content";
import Footer from "./componets/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="mt-86">
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default index;
