"use client";
import { MoveRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="col-span-6 text-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] text-text-primary mb-6">
          <Typewriter
            options={{
              strings: [
                "Artistry in Precision Engineering",
                "Artistry in Modern Engineering",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 40,
            }}
          />
        </h1>
        <div className="flex justify-center">
          <p className="mt-6 text-base sm:text-lg text-text-secondary leading-7 text-center w-[46em] font-light">
            Experience the next evolution of acoustic performance and tactile
            feedback. Minimalist workspace instruments designed for creators who
            demand clarity, durability, and uncompromising style.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/products")}
            className="inline-flex bg-[#3b82f6] gap-4 mt-8 items-center justify-center rounded-full hover:bg-primary-accent-hover text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:scale-[1.02] cursor-pointer"
          >
            Products Directory
            <MoveRight strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
