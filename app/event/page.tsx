"use client";
import Header from "@/components/header";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Hero from "./components/hero";
import Dates from "./components/dates";

const EventPage = () => {
  // const [filteredDates, setFilteredDates] = useState()
  const [active, setActive] = useState(false);

  return (
    <main className="bg-black text-white relative  w-full">
      <Header active="event" />
      <section className="flex flex-col gap-20">
        <Hero />
        <Dates />
        {/* <Counter/> */}
        {/* <UpcomingTour /> */}
      </section>

      {/* <Albums/> */}
    </main>
  );
};

export default EventPage;
