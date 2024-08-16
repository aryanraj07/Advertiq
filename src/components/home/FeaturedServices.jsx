import React from "react";

const FeaturedServices = () => {
  const features = [
    {
      title: "DIGITAL STRATEGY AND PLANNING",
      desc: "We brand the things that didn't exist yesterday; we challenge, create, make, market, and solve.",
    },
    {
      title: "VIDEO CONTENT CREATION",
      desc: "Experience enchanting video content creation, where dreams come to life through captivating storytelling and expert craftsmanship.",
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      desc: "We are good at communicating stories, and that's what we do best. The rest happens automatically.",
    },
    {
      title: "Google PPC",
      desc: "Google PPCs aren't run by the advertising people; mathematicians run them, and so are we.",
    },
    {
      title: "GEO -TARGETED SEO",
      desc: "We're specialists, not generalists. We deliver integrated solutions with unparalleled services and deliverables tailored to unlock growth.",
    },
    {
      title: "DESGIN AND BRANDING",
      desc: "We design brands that does the selling for you and makes its competitors irrelevant.",
    },
  ];
  return (
    <div>
      {/* Heading goes here */}
      <div className="featured-services-heading-container">
        <h1 className="">Featured</h1>
        <h1>Services</h1>
        <p>
          From Digital Strategy to Creative Marvels, We Redefine Your Brand's
          Presence. Unlock Success with AdvertIQ's Dynamic Solutions.
        </p>
      </div>
      <button className="btn-md">Let's Work Together</button>
    </div>
  );
};

export default FeaturedServices;
