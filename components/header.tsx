"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  active: "home" | "event" | "store";
}

const Header = ({ active }: Props) => {
  return (
    <header className="bg-black/90 lg:px-7 xl:px-9  px-4 z-50 fixed w-[100dvw]  flex items-center justify-between h-24">
      <h2 className="bg-[#C92F21] font-black text-black text-sm px-3 py-1  -tracking-widest">
        TØP
      </h2>
      <ul className="items-center hidden lg:flex w-[25%]  text-white  text-sm justify-between">
        <li
          className={` ${
            active === "home"
              ? "text-[#C92F21]"
              : "text-white hover:text-gray-400 transition"
          } cursor-pointer`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={` ${
            active === "event"
              ? "text-[#C92F21]"
              : "text-white hover:text-gray-400 transition"
          } cursor-pointer`}
        >
          <Link href="/event">Event</Link>
        </li>
        <li
          className={` ${
            active === "store"
              ? "text-[#C92F21]"
              : "text-white hover:text-gray-400 transition"
          } cursor-pointer`}
        >
          <Link href="/store">Store</Link>
        </li>
      </ul>
      <Sheet>
        <div className="lg:hidden text-white">
          <SheetTrigger>
            <Menu className="text-neutral-500" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-5 text-xl mt-16">
              <li
                className={` ${
                  active === "home"
                    ? "text-[#C92F21]"
                    : "text-white hover:text-gray-400 transition"
                } cursor-pointer`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={` ${
                  active === "event"
                    ? "text-[#C92F21]"
                    : "text-white hover:text-gray-400 transition"
                } cursor-pointer`}
              >
                <Link href="/event">Event</Link>
              </li>
              <li
                className={` ${
                  active === "store"
                    ? "text-[#C92F21]"
                    : "text-white hover:text-gray-400 transition"
                } cursor-pointer`}
              >
                <Link href="/store">Store</Link>
              </li>
            </ul>
          </SheetContent>
        </div>
      </Sheet>
      <Link
        className="flex items-center justify-center mr-4"
        target="_blank"
        href="https://link.seated.com/e0987753-a6bb-41b3-8bbe-d08b642efddc"
      >
        <h2 className=" transition duration-300 bg-[#c92121] hover:bg-[#c92121c3] font-black text-black text-sm px-3 py-1  -tracking-wide">
          Get Tickets
        </h2>
      </Link>
    </header>
  );
};

export default Header;
