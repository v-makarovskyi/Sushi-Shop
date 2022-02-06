import React from "react";

import "./home.scss";
import { Slider } from "../../conponents/slider/Slider";
import { Categories } from "../../conponents/categories/Categories";
import { Footer } from "../../conponents/footer/Footer";
import { Topbar } from "../../conponents/topbar/Topbar";
import { Products } from "../../conponents/products/Products";

export const Home = () => {
  return (
    <div className="homePage">
      <Topbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};
