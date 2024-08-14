import React from "react";
import Home from "../components/home/Home.jsx";
import Hero from "../components/home/Hero.jsx";
import SEO from "../components/SEO.jsx";

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
    </div>
  );
};

export default HomePage;
