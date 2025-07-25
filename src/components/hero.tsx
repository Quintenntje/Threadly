import Image from "next/image";
import Link from "@/components/Link";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <Image
        src="/main-hero.jpg"
        alt="Orange espadrilles summer fashion background"
        fill
        className="absolute inset-0 w-full h-full object-cover  z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative max-w-7xl mx-auto w-full z-20 px-4">
        <h1 className="sm:text-7xl text-5xl font-bold font-serif mb-4 text-white">
          Explore the Latest Trends
        </h1>
        <p className="sm:text-lg text-base font-sans text-white mb-4">
          Discover the best clothing and accessories for every occasion
        </p>
        <Link href="/products" variant="secondary" >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
