import React from "react";
import { About, SEO } from "../components";

const AboutPage = () => {
  return (
    <>
      <SEO title="About Page" description="About AdvertIQ" type="About" />
      <div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
