import Hero from "@/components/hero";
import IndexPage from "@/components/indexPage";
import { ReviewCarrousel } from "@/components/reviewCaroussel";
import Sentence from "@/components/sentence";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Sentence />
      <IndexPage></IndexPage>
      <div className="w-[95vw] flex justify-center items-center">
        <ReviewCarrousel />
      </div>
    </main>
  );
};

export const revalidate = 5;

export default Home;
