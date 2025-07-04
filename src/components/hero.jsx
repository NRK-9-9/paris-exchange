import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="hero  lg:min-h-[40vh] min-h-[15vh] bg-[url('https://i.imgur.com/lEg3fIw.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col justify-end"></div>
          <div className="max-w-2xl ">
            <h2 className="lg:mb-5 mb-2 lg:text-5xl text-xl font-bold font-logoFont tracking-wide">
              Bureau De Change
            </h2>
            <p className="tracking-wide lg:text-lg text-xs">
              4 Bd. St-Michel 75006
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
