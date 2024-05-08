import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative flex lg:w-[95%] m-auto flex-col lg:gap-2 gap-1 items-center justify-center">
      <div className="w-full h-[100dvh] lg:h-[85%] relative">
        <Image
          src="/heroStore.png"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full lg:h-[15%] flex flex-col">
        <div className="w-full bg-[#E1402D] h-full items-center justify-center flex flex-col text-black uppercase">
          <h1 className="font-black text-4xl md:text-5xl lg:text-7xl text-center py-4">
            The New Clancy Merch
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
