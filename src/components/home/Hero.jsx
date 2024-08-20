import React from "react";

const Hero = () => {
  return (
    <div className="main-container">
      {/* Our hero heading section goes here */}
      <div className="flex flex-col items-center gap-16 justify-center">
        {/* Our brand image goes here */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="hero-img-container">
            <img
              src="https://static.wixstatic.com/media/ec2f7a_10e99b8955f34d668bf5837359bcc0fc~mv2.png/v1/fill/w_153,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec2f7a_10e99b8955f34d668bf5837359bcc0fc~mv2.png"
              alt="hero-brand"
            />
          </div>
          {/* Our heading goes here */}
          <div className="lg:text-7xl md:text-5xl text-3xl font-bold text-center ">
            <h1>India's 1st Real-Estate-Exclusive Digital Strategy Firm</h1>
          </div>
        </div>
        <button className="btn-md">Find Out More></button>
      </div>
    </div>
  );
};

export default Hero;
