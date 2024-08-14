import React from "react";
import { SEO, Services } from "../components";

const ServicesPage = () => {
  return (
    <div>
      <SEO
        title="Advertiq Services Page"
        description="Services Page"
        type="branding"
      />
      <Services />
    </div>
  );
};

export default ServicesPage;
