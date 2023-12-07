import Carouselhero from "@/components/carouselhero";
import Hero from "@/components/hero";
import IndexPage from "@/components/indexPage";
import { atom } from "jotai";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <IndexPage></IndexPage>
    </div>
  );
};

export const revalidate = 5;

export default Home;
