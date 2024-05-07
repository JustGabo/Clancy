import Link from "next/link";
import React from "react";

interface Props {
  active: "home" | "event" | "store"
}

const Footer = () => {
  return (
    <footer className="w-[100%] text-white px-9 m-auto bg-black h-screen flex items-center">
      <section className="flex flex-col justify-between h-full w-full">
        <div className="" />
        <article className="flex items-center  lg:gap-32 gap-28 flex-wrap ">
          <div className="flex flex-col gap-2 h-[130px]">
            <h2 className="text-xl">Music</h2>
            <ul className="flex flex-col  text-sm">
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw?sub_confirmation=1"
                >
                  Youtube
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  href="https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx?si=6bo6xmIaR96b6Ax1ciw2gQ"
                  target="_blank"
                >
                  Spotify
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://music.amazon.com/artists/B0033LXVEU/twenty-one-pilots"
                >
                  Amanzon Music
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://music.apple.com/us/artist/twenty-one-pilots/349736311"
                >
                  Apple Music
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[130px]">
            <h2 className="text-xl">Socials</h2>
            <ul className="flex flex-col  text-sm">
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://instagram.com/twentyonepilots/"
                >
                  Instagram
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://www.facebook.com/twentyonepilots"
                >
                  Facebook
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://www.tiktok.com/@twentyonepilots"
                >
                  Tiktok
                </Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link
                  className="w-full  h-full flex items-center "
                  target="_blank"
                  href="https://twitter.com/twentyonepilots"
                >
                  X
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[130px]">
            <h2 className="text-xl">Pagination</h2>
            <ul className="flex flex-col  text-sm">
            <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link href="/event">Event</Link>
              </li>
              <li className="text-neutral-600 h-8 flex items-center   hover:text-neutral-500 transition">
                <Link href="/store">Store</Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="text-xs border-t border-neutral-700  select-none tracking-wider text-center py-3 text-neutral-600">
          <p>© COPYRIGHT 2024 FBR AND TØP</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
