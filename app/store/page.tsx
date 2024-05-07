import Header from "@/components/header";
import React from "react";
import Hero from "./components/hero";
import Merch from "./components/merch";

const StorePage = () => {
  return (
    <main className="bg-black text-white relative  w-full">
      <Header active="store" />
      <section className="flex flex-col gap-10">
        <Hero />
        <Merch />
      </section>

      {/* <Albums/> */}
    </main>
  );
};

export default StorePage;
