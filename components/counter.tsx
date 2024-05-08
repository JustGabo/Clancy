"use client";
import React, { useState } from "react";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const dateToBe = new Date("May 23, 2024 12:59:59").getTime();
  //   const dateToBe = new Date("May 1, 2024 12:21:00").getTime()

  const conwtdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = dateToBe - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (distance < 0) {
      setIsOver(true);
    }
  }, 1000);

  return (
    <section className="w-[95%] h-[100dvh] m-auto flex items-center ">
      <div className="flex flex-col gap-10 w-full items-center">
        {/* <article className="flex items-center gap-5">
          <div className="bg-[#C92F21] relative  py-2 w-44 text-center rounded-md text-black">
            <div className="absolute top-1/2 left-0 w-full h-2 z-10  bg-black" />
            <h2 className="text-9xl font-bold">{days}</h2>
          </div>
          <h2 className="text-9xl font-bold">Days</h2>
        </article>
        <article className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-semibold">{hours}</p>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-semibold">{minutes}</p>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-semibold">{seconds}</p>
            <span className="text-sm">Seconds</span>
          </div>
        </article> */}

        {/* <article className="flex flex-col relative">
          <p className="text-sm text-gray-500">
            {isOver ? "Here we are!" : "We're almost ready!"}
          </p>
          <p className="text-sm text-gray-500"></p>
          <h2 className="text-7xl font-bold z-10">Launching in...</h2>
          <div className=" h-[2px] absolute bottom-0 z-0 bg-[#C92F21]/50 w-[35%]" />
        </article>

        <article className="grid grid-cols-4 w-[65%] gap-5">
          <div className="flex flex-col items-center  gap-5 text-white">
            <div className="bg-gradient-to-t  w-full rounded-sm relative from-gray-800/10 to-gray-400/15 shadow-xl shadow-orange-600/20  border-t border-gray-400/20 h-48 flex items-center justify-center">
              <p className="text-7xl font-bold z-10">
                {days < 10 && 0}
                {days}
              </p>
            </div>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center gap-5 text-white">
            <div className=" bg-gradient-to-t w-full from-gray-800/10 rounded-sm to-gray-400/15 shadow-xl shadow-orange-600/20  border-t border-gray-400/20 h-48 flex items-center justify-center">
              <p className="text-7xl font-bold">
                {hours < 10 && 0}
                {hours}
              </p>
            </div>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center gap-5 text-white">
            <div className=" bg-gradient-to-t w-full from-gray-800/10 to-gray-400/15 rounded-sm shadow-xl shadow-orange-600/20  border-t border-gray-400/20 h-48 flex items-center justify-center">
              <p className="text-7xl font-bold">
                {minutes < 10 && 0}
                {minutes}
              </p>
            </div>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center gap-5 text-white">
            <div className=" bg-gradient-to-t w-full from-gray-800/10 to-gray-400/15 rounded-sm shadow-xl shadow-orange-600/20  border-t border-gray-400/20 h-48 flex items-center justify-center">
              <p className="text-7xl font-bold">
                {seconds < 10 && 0}
                {seconds}
              </p>
            </div>

            <span>Seconds</span>
          </div>
        </article> */}

        <article className="text-center">
          <h2 className="uppercase  font-bold text-4xl lg:text-7xl">
            New Album Coming Soon<span className="text-[#C92F21]">.</span>
          </h2>
        </article>
        <article className="flex items-center gap-5">
          <div className="flex flex-col lg:w-32 w-16  items-center gap-2">
            <div className=" w-full relative">
              <p className="lg:text-7xl  text-3xl font-bold text-center text-gray-400">
                {days < 10 && 0}
                {days}
              </p>
              <span className="absolute -right-3 top-0 lg:text-7xl text-3xl text-gray-400">
                :
              </span>
            </div>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col lg:w-32 w-16 items-center gap-2">
            <div className=" w-full relative">
              <p className="lg:text-7xl  text-3xl font-bold text-center text-gray-400">
                {hours < 10 && 0}
                {hours}
              </p>
              <span className="absolute -right-3 top-0 lg:text-7xl text-3xl text-gray-400">
                :
              </span>
            </div>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col lg:w-32 w-16 items-center gap-2">
            <div className=" w-full text-center relative">
              <p className="lg:text-7xl  text-3xl font-bold text-gray-400">
                {minutes < 10 && 0}
                {minutes}
              </p>
              <span className="absolute -right-3 top-0 lg:text-7xl text-3xl text-gray-400">
                :
              </span>
            </div>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col lg:w-32 w-16 items-center gap-2">
            <div className=" w-full relative text-center">
              <p className="lg:text-7xl  text-3xl font-bold text-gray-400">
                {seconds < 10 && 0}
                {seconds}
              </p>
            </div>
            <span className="text-sm">Seconds</span>
          </div>
        </article>
        <article className="">
          <form action="" className="flex flex-col gap-2 w-full text-center">
            <p className="text-xs text-gray-500">Get notify when is ready</p>
            <div className="relative text-center w-full">
              <input
                className="bg-transparent border text-sm p-3 h-12 placeholder:text-sm lg:placeholder:text-xs w-[90dvw] m-auto lg:w-[500px] outline-none rounded-full border-[#C92F21]"
                type="email"
                placeholder="Email address"
              />
              <button className="rounded-full absolute right-0 bg-[#C92F21] hover:bg-[#] w-[100px] text-xs lg:text-base h-12 lg:w-[150px]">
                Submit
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Counter;
