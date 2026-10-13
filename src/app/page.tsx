import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
    <div className="flex flex-col items-center">
      <Hero />
      <NewProducts />
    </div>
    <div className="px-10">
    <Testimonial />

    </div>

    </main>
  );
}
