import React from "react";
import Songs from "@/songs.json";
import Link from "next/link";

const UpcomingTourRight = () => {
  return (
    <section className="lg:w-[50%] w-full text-center flex flex-col gap-10 justify-between">
      <h2 className="text-5xl font-semibold">
        {" "}
        Upcoming <span className="text-[#C92F21]">Clancy</span> Track
      </h2>
      <ul className="grid grid-cols-2 ">
        {Songs.map((song) => {
          return (
            <p
              className="hover:text-[#C92F21] font-light h-8 text-sm transition duration-300 cursor-pointer"
              key={song.name}
            >
              {song.name}
            </p>
          );
        })}
      </ul>
      <div className="flex flex-col items-start gap-2">
        <p className="text-gray-400 select-none text-sm">This is a Pre-order</p>
        <button className="uppercase transition duration-300 bg-[#c92121] hover:bg-[#c92121c3] text-black w-full font-black text-3xl h-20">
          <Link className="w-full h-full  flex items-center justify-center " target="_blank" href="https://link.seated.com/e0987753-a6bb-41b3-8bbe-d08b642efddc">
            get your ticket
          </Link>
        </button>
      </div>
    </section>
  );
};

export default UpcomingTourRight;
