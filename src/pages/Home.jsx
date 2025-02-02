import React from "react";
import { HeroSection } from "../components/HeroSection";
import ProductsAndProjects from "../components/ProductsAndProjects";
import ArtWorks from "../components/ArtWorks";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <ProductsAndProjects />

      <ArtWorks />

      <ContactUs />
    </div>
  );
};

export default Home;
