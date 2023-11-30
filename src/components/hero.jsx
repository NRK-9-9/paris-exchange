import React from "react";

const Hero = () => {
  return (
    // <div className="hero min-h-[43vh] bg-[url('https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=')]">
    <div className="flex justify-center ">
      <div className="hero  lg:min-h-[48vh] min-h-[30vh] bg-[url('https://i.imgur.com/Bq2sNWj.jpeg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="mb-5 lg:text-5xl text-2xl font-bold font-logoFont tracking-wide">
              Bureau De Change
            </h2>
            <p className="tracking-wide lg:text-lg text-xs">
              Bureau de change situé au Boulevard Saint-Michel A gauche de la
              fontaine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
