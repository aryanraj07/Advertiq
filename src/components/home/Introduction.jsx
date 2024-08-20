import React from "react";

const Introduction = () => {
  return (
    <div className="main-container">
      <h1 className="heading-md text-center">
        Welcome to <span className="text-orange">AdvertIQ</span>- Where Real
        Estate Reigns Supreme!
      </h1>
      {/* Description goes here */}
      <div className=" flex justify-center items-center flex-col gap-5">
        <p>
          Step into a world of real estate domination, where we redefine the
          rules of digital strategy. At AdvertIQ, we are not your average
          digital agency; we're the trailblazers, pioneers, and visionaries of
          property marketing. ​
        </p>
        <p>
          As India's 1st Real-Estate-Only Digital Strategy Firm, we are
          laser-focused on the realm of real estate. Our expertise runs deep,
          and we live and breathe every aspect of the industry. We know the
          language of property, understand the pulse of the market, and possess
          the secret sauce to make your projects shine brightly amidst fierce
          competition.
        </p>
        <p>
          With boundless passion and unrivaled knowledge, we craft digital
          strategies that elevate your brand, maximize exposure, and connect
          with your target audience like never before. From captivating
          storytelling to precision targeting, we've got the winning formula for
          real estate success.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
