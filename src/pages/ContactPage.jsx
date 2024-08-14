import React from "react";
import { Contact } from "../components";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Advertiq Contact Page"
        description="Contact Page"
        type="branding"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
