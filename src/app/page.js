"use client";
import ExchangeTable from "@/components/exchangeTable";
import Hero from "@/components/hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="lg:mt-10 mt-5 lg:grid lg:grid-cols-4 lg:gap-10 lg:mx-10">
        <div className="col-span-3">
          <ExchangeTable />
        </div>
        <div className="card lg:w-full lg:h-full bg-base-300 p-3 lg:mt-0 mt-14">
          Eum magnam qui ea ipsam voluptas placeat aut. Sint quod temporibus
          est. Minus commodi quae illo laudantium dicta doloribus tenetur et.
          Esse ut est. Aut earum voluptatum mollitia esse et similique veniam ut
          fugit. Aperiam accusamus harum expedita corrupti maxime. Tempore
          <br />
          <br />
          tempora eaque qui mollitia vel nihil officiis. Eum atque saepe
          excepturi nihil magnam fuga beatae occaecati. Facilis quam suscipit
          <br />
          <br />
          dolores commodi omnis omnis velit aut. Rerum eligendi adipisci
          <br />
          <br />
          reprehenderit quis quos omnis laboriosam quis occaecati. Quia autem
          eum occaecati cumque quis necessitatibus officia dolorem dolorem. Hic
          porro at dolorum enim aspernatur nisi autem maiores.
        </div>
      </div>
    </div>
  );
};

export default Home;
