import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[50vh] bg-[url('https://media.istockphoto.com/id/1322201350/photo/digitally-enhanced-shot-of-a-graph-showing-the-ups-and-downs-shares-on-the-stock-market.jpg?s=1024x1024&w=is&k=20&c=0h4cOcoSUslAF9JNqNZv_4dsLqEA3JxT5Vq-NlEDsSk=')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-5xl text-3xl font-bold font-logoFont">
            Bureau de change sur Paris
          </h1>
          <p className="mb-5">
            Quos non iusto ab fugit ut omnis temporibus. Dolor sit et esse
            dolorem. Quam reprehenderit nihil reprehenderit at modi consequatur.
            Voluptates porro ducimus voluptatem sint ut quia.
          </p>
          <button className="btn btn-primary">Test Button</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
