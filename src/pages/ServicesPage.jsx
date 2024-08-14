import React from "react";
import { Services } from "../components";
import SEO from "../components/SEO";

const ServicesPage = () => {
  return (
    <div>
      <SEO
        title="Advertiq Services Page"
        description="Services"
        name="Advertiq"
        type="branding"
      />
      <Services />
    </div>
  );
};

export default ServicesPage;
