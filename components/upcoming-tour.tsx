import Image from "next/image";
import React from "react";
import UpcomingTourRight from "./upcoming-tour-right";

const UpcomingTour = () => {
  return (
    <section className="w-[95%] flex flex-col gap-5 m-auto h-screen">
      <h2 className="uppercase lg:text-7xl xl:text-8xl text-5xl text-[#C92F21]  font-bold">
        Upcoming Tour
      </h2>
      <article className="flex lg:flex-row flex-col h-full gap-4">
        <div className="w-full h-full relative">
          <Image
            src="/events.webp"
            className="lg:object-fill object-cover"
            alt="Upcoming Tour Image"
            fill
          />
        </div>
       <UpcomingTourRight/>
      </article>
    </section>
  );
};

export default UpcomingTour;
