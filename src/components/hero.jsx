import React from "react";

const Hero = () => {
  return (
    // <div className="hero min-h-[43vh] bg-[url('https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=')]">
    <div className="hero min-h-[43vh] bg-[url('https://static.vecteezy.com/system/resources/previews/002/151/433/large_2x/global-currency-exchange-network-and-technology-on-blue-background-vector.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h2 className="mb-5 lg:text-5xl text-3xl font-bold font-logoFont">
            Bureau de change sur Paris
          </h2>
          <p className="">
            Notre bureau de change est situé aux 4 boulevard saint michel
          </p>

          <p className=" ">A gauche de la fontaine de saint michel</p>
          <p className="mb-5 ">Meilleurs prix de change garanties</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
