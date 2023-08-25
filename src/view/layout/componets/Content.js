import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Products from "../../pages/products";
import ProductDetails from "../../pages/products/ProductDetails";
const Content = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/apropos" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Products />} path="/produits" />
      <Route element={<ProductDetails />} path="/produits/:id" />
    </Routes>
  );
};

export default Content;
