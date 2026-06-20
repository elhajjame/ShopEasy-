import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-24 bg-[#111827]/20 rounded-3xl border border-[#374151] max-w-2xl mx-auto"
    >
      <ShoppingBag
        className="h-12 w-12 text-[#9CA3AF] stroke-[1.5] mb-4 opacity-50"
        aria-hidden="true"
      />
      <h3 className="text-lg font-bold text-white uppercase tracking-wider">
        Your Bag is Empty
      </h3>
      <p className="mt-2 text-xs text-[#9CA3AF] max-w-xs font-light leading-relaxed">
        There are no hardware blueprints loaded to your active workstation
        session currently.
      </p>
      <Link
        className="mt-8 rounded-full bg-[#111827] border border-[#374151] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-white transition duration-200 cursor-pointer"
        href="/products"
      >
        Go TO Products Page
      </Link>
    </div>
  );
}

export default EmptyCart;
