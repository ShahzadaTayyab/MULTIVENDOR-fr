import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Routes/Hero/Hero";
import Categories from "../components/Routes/Categories/Categories";
import BestDeals from "../components/Routes/BestDeals/BestDeals";
import FeaturedProducts from "../components/Routes/FeaturedProducts/FeaturedProducts";
import Events from "../components/Routes/Events/Events";
import Sponsered from "../components/Routes/Sponsered";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsered />
      <Footer />
    </div>
  );
};

export default HomePage;
