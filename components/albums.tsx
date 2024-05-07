import Image from "next/image";
import Link from "next/link";
import React from "react";

const Albums = () => {
  return (
    <section className="w-[95%] mx-auto flex flex-col gap-5">
      <article className="flex items-center justify-between">
        <h3 className="uppercase font-bold text-[#C92F21] text-6xl">Albums</h3>
        <Link className="font-semibold" href="#">
          View more
        </Link>
      </article>
      <p className="w-[30%] text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        fugit molestias quasi quidem quaerat! Voluptas.
      </p>

      <article className="grid grid-cols-3 h-[60dvh]">
        <div className="relative w-full h-full">
          <Image src="/blurryFace.jpg" fill alt="Album Logo" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/vessel.jpg" fill alt="Album Logo" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/trench.jpg" fill alt="Album Logo" />
        </div>
      </article>
    </section>
  );
};

export default Albums;
