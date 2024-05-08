import Albums from "@/components/albums";
import Counter from "@/components/counter";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import UpcomingTour from "@/components/upcoming-tour";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white relative  w-full">
      <Header active="home" />
      <section className="flex flex-col lg:gap-20 gap-10">
        <Hero />
        <Counter/>
        <UpcomingTour />
      </section>

      {/* <Albums/> */}
    </main>
  );
}
