import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#374151] bg-[#0A0A0A]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="font-sans text-xl font-bold tracking-tighter uppercase text-white"
          href="/"
        >
          Easy Shop
        </Link>
        <ul className="flex gap-4">
          <li className="transition-all pb-1 cursor-pointer hover:text-[#F9FAFB] text-[#9CA3AF]">
            <Link href="/products">Products</Link>
          </li>
        </ul>
        <div className="group relative rounded-full p-2.5 text-[#9CA3AF] bg-[#111827] border border-[#374151] hover:text-[#F9FAFB] hover:bg-[#1F2937] transition-all cursor-pointer flex items-center justify-center">
          <Link href="/cart">
            <ShoppingBag strokeWidth={1} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
