import React from "react";
import Home from "../components/home/Home.jsx";
import Hero from "../components/home/Hero.jsx";
import SEO from "../components/SEO.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import Introduction from "../components/home/Introduction.jsx";
import FeaturedServices from "../components/home/FeaturedServices.jsx";

const HomePage = () => {
  return (
    <div>
      <SEO
        title="Advertiq Home Page"
        description="|Digital Strategy for Real Estate"
        type="branding"
      />
      <Home />
      <Hero />
      <StatsSection />
      <Introduction />
      <FeaturedServices />
    </div>
  );
};

export default HomePage;
