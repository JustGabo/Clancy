"use client";
import React, { useEffect, useState } from "react";
import Events from "@/event.json";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dates = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents = Events.filter((event) => event.place.includes(filter));

  const uniqueEventPlaces = Events.filter(
    (event, index, self) =>
      index === self.findIndex((e) => e.place === event.place)
  );

  return (
    <section
      className={`${
        filter !== "All" ? "h-screen items-start  " : "items-center"
      }   px-9  text-white flex`}
    >
      <article className="flex flex-col gap-5 w-full">
        <div className="flex items-center lg:gap-10 gap-5">
          <h2 className="lg:px-2 lg:text-lg text-base">Filter dates</h2>

          <div className="lg:w-[20%] w-[40%]">
            <Select value={filter} onValueChange={(value) => setFilter(value)}>
              <SelectTrigger className="bg-black border-neutral-600">
                <SelectValue placeholder={filter} />
              </SelectTrigger>
              <SelectContent className="bg-black text-white">
                <SelectGroup>
                  <SelectLabel>Places</SelectLabel>
                  <SelectItem value="All">All</SelectItem>
                  {uniqueEventPlaces.map((event) => {
                    return (
                      <SelectItem
                        className="hover:bg-neutra-500"
                        key={event.date}
                        value={event.place}
                      >
                        {event.place}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filter === "All" ? (
          <div>
            {Events.map((event) => {
              return (
                <Link
                  key={event.date}
                  href="https://link.seated.com/e0987753-a6bb-41b3-8bbe-d08b642efddc"
                  target="_blank"
                >
                  <div className="grid grid-cols-3 gap-2 lg:gap-0 items-center lg:px-2 hover:bg-neutral-800 transition border-t border-neutral-700  h-16 w-full ">
                    <p className="lg:text-sm text-[10px] line-clamp-1 uppercase tracking-wide ">
                      {event.date}
                    </p>
                    <p className="lg:text-sm text-[10px] line-clamp-1 uppercase tracking-wide">
                      {event.place}
                    </p>
                    <p className="lg:text-sm text-[10px] line-clamp-1 tracking-wide uppercase">
                      {event.state}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            {filteredEvents.map((event) => {
              return (
                <Link
                  key={event.date}
                  href="https://link.seated.com/e0987753-a6bb-41b3-8bbe-d08b642efddc"
                  target="_blank"
                >
                  <div className="grid grid-cols-3 gap-2 lg:gap-0 items-center lg:px-2 hover:bg-neutral-800 transition border-t border-neutral-700  h-16 w-full ">
                    <p className="lg:text-sm text-[10px] line-clamp-1 uppercase tracking-wide ">
                      {event.date}
                    </p>
                    <p className="lg:text-sm text-[10px] line-clamp-1 uppercase tracking-wide">
                      {event.place}
                    </p>
                    <p className="lg:text-sm text-[10px] line-clamp-1 tracking-wide uppercase">
                      {event.state}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </article>
    </section>
  );
};

export default Dates;
