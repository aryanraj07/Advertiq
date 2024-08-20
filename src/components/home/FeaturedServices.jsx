import React from "react";

const FeaturedServices = () => {
  const features = [
    {
      id: 2,
      title: "DIGITAL STRATEGY AND PLANNING",
      desc: "We brand the things that didn't exist yesterday; we challenge, create, make, market, and solve.",
    },
    {
      id: 2,
      title: "VIDEO CONTENT CREATION",
      desc: "Experience enchanting video content creation, where dreams come to life through captivating storytelling and expert craftsmanship.",
    },
    {
      id: 3,
      title: "SOCIAL MEDIA MARKETING",
      desc: "We are good at communicating stories, and that's what we do best. The rest happens automatically.",
    },
    {
      id: 4,
      title: "Google PPC",
      desc: "Google PPCs aren't run by the advertising people; mathematicians run them, and so are we.",
    },
    {
      id: 5,
      title: "GEO -TARGETED SEO",
      desc: "We're specialists, not generalists. We deliver integrated solutions with unparalleled services and deliverables tailored to unlock growth.",
    },
    {
      id: 6,
      title: "DESGIN AND BRANDING",
      desc: "We design brands that does the selling for you and makes its competitors irrelevant.",
    },
  ];
  return (
    <div className="main-container">
      <div className="flex flex-col gap-10">
        {/* Heading goes here */}
        <div className="featured-services-heading-container">
          <h1 className="heading-lg">Featured</h1>
          <h1 className="heading-lg">Services</h1>
          <p className="heading-md">
            From Digital Strategy to Creative Marvels, We Redefine Your Brand's
            Presence. Unlock Success with AdvertIQ's Dynamic Solutions.
          </p>
        </div>
        <div>
          <button className="btn-md">Let's Work Together</button>
        </div>
        {/* Featured sections card goes here */}
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <div className="w-2/3 border-2  border-b-orange grid"></div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
