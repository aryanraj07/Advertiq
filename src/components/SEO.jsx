import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, type, keywords }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AdvertIQ" />
      <meta name="organization" content="AdvertIQ" />
      {/* End standard metadata tags */}

      {/* Open Graph tags for social media */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="AdvertIQ" />
      {/* End Open Graph tags */}
    </Helmet>
  );
}
