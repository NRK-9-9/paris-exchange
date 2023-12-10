import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center ">
      <div className="hero  lg:min-h-[40vh] min-h-[15vh] bg-[url('https://i.imgur.com/Bq2sNWj.jpeg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="mb-5 lg:text-5xl text-xl font-bold font-logoFont tracking-wide">
              Bureau De Change
            </h2>
            <p className="tracking-wide lg:text-lg text-xs">
              Situé au 4 Boulevard Saint-Michel 75006 A gauche de la fontaine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
