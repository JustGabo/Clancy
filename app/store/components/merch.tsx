import React from "react";
import Image from "next/image";
import Link from "next/link";

const Merch = () => {
  return (
    <section className=" flex flex-col lg:gap-y-20 items-center px-4">
      <article className="flex items-center lg:h-screen lg:flex-row flex-col gap-y-10 lg:gap-y-0   gap-x-8">
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/BlackVinilMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/zebraVinilMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/grayVinilMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/topVinilMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
      </article>
      <article className="flex items-center lg:flex-row flex-col gap-y-5 lg:gap-y-0 gap-x-8">
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/PosterMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/topCDMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/stickerMerch.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
        <Link
          className="p-2"
          href="https://store.twentyonepilots.com/products"
          target="_blank"
        >
          <Image
            className="object-fill hover:scale-105 transition"
            src="/merch/posterMerch3.png"
            alt="Merch"
            width={300}
            height={300}
          />
        </Link>
      </article>
      {/* <Image
          className="object-fill"
          src="/merch/PosterMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />
        <Image
          className="object-fill"
          src="/merch/topCDMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />
        <Image
          className="object-fill"
          src="/merch/topTapeMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />
        <Image
          className="object-fill"
          src="/merch/topBoxMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />
        <Image
          className="object-fill"
          src="/merch/balaclavaMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />

        <Image
          className="object-fill"
          src="/merch/stickerMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />

        <Image
          className="object-fill"
          src="/merch/sealMerch.png"
          alt="Merch"
          width={300}
          height={300}
        />
        <Image
          className="object-fill"
          src="/merch/poster2Merch.png"
          alt="Merch"
          width={300}
          height={300}
        /> */}
      {/* <Image
          className="object-fill"
          src="/merch/posterMerch3.png"
          alt="Merch"
          width={300}
          height={300}
        /> */}
    </section>
  );
};

export default Merch;
