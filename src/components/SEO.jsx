import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  name,
  type,
  organization,
  keywords,
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={organization} />
      <meta name="organization" content={organization} />
      {/* End standard metadata tags */}

      {/* Open Graph tags for social media */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={organization} />
      {/* End Open Graph tags */}
    </Helmet>
  );
}
