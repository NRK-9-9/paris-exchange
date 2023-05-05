"use client";
import ExchangeTable from "@/components/exchangeTable";
import Hero from "@/components/hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" mt-5 lg:grid lg:grid-cols-4 lg:gap-10 lg:mx-10">
        <div className="col-span-3 place-items-center">
          <ExchangeTable />
        </div>
        <div className="card lg:w-full lg:h-full bg-base-300 p-3 lg:mt-0 mt-14">
          Never gonna give you up Never gonna let you down Never gonna run
          around and desert you Never gonna make you cry Never gonna say goodbye
          Never gonna tell a lie and hurt you W&apos;ve known each other for so
          long Your heart&apos;s been aching, but you&apos;re too shy to say it
          to say it Inside, we both know what&apos;s been going on going on We
          know the game and we&apos;re gonna play it I just wanna tell you how
          I&apos;m feeling Gotta make you understand Never gonna give you up
          Never gonna let you down Never gonna run around and desert you Never
          gonna make you cry Never gonna say goodbye Never gonna tell a lie and
          hurt you Never gonna give you up Never gonna let you down Never gonna
          run around and desert you Never gonna make you cry Never gonna say
          goodbye Never gonna tell a lie and hurt you Never gonna give you up
          Never gonna let you down Never gonna run around and desert you Never
          gonna make you cry Never gonna say goodbye Never gonna tell a lie and
          hurt you
        </div>
      </div>
    </div>
  );
};

export default Home;
