import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative flex lg:w-[95%] m-auto flex-col lg:gap-2 gap-1 items-center justify-center">
      <div className="w-full h-[100dvh] lg:h-[85%] relative">
        <Image
          src="/event.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full lg:h-[15%] flex flex-col">
        <div className="w-full bg-[#E03D2E] h-full items-center justify-center flex flex-col text-black uppercase">
          <h1 className="font-black text-4xl lg:text-8xl md:text-6xl text-center py-4">
            The World Tour Dates
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
