import Hero from "@/components/hero";
import IndexPage from "@/components/indexPage";
import React from "react";
import Sentence from "@/components/sentence";

const Home = () => {
  return (
    <div>
      <Sentence />
      <Hero />
      <IndexPage></IndexPage>
    </div>
  );
};

export const revalidate = 5;

export default Home;
