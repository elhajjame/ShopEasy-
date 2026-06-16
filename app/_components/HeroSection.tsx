import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid gap-12 grid-cols-12 items-center">
      <div className="col-span-6">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] text-text-primary mb-6">
          Artistry in <br /> <span className="text-[#3B82F6]">Precision</span>{" "}
          <br /> Engineering
        </h1>
        <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl font-light leading-relaxed">
          Experience the next evolution of acoustic performance and tactile
          feedback. Minimalist workspace instruments designed for creators who
          demand clarity, durability, and uncompromising style.
        </p>
        <button className="inline-flex bg-[#3b82f6] gap-4 mt-8 items-center justify-center rounded-full hover:bg-primary-accent-hover text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:scale-[1.02] cursor-pointer">
          products directory
          <MoveRight strokeWidth={2.25} />
        </button>
      </div>
      <div className="col-span-6">
        <Image
          className=""
          src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
