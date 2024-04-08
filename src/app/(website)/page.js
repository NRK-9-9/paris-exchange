import Hero from "@/components/hero";
import IndexPage from "@/components/indexPage";
import { ReviewCarrousel } from "@/components/reviewCaroussel";
import Sentence from "@/components/sentence";
import Script from "next/script";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Sentence />
      <IndexPage></IndexPage>
      {/* <div className="w-[95vw] flex justify-center items-center">
        <ReviewCarrousel />
      </div> */}
      <div className="lg:mt-10 px-10 h-auto w-full flex justify-center">
        {/* <iframe
          src="https://1ab78ef2c13e49e2a78daf6af8b43070.elf.site"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe> */}
        <div className="w-[80%]">
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          <div
            class="elfsight-app-1ab78ef2-c13e-49e2-a78d-af6af8b43070"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 5;

export default Home;
