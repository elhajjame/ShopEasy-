import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Products } from "../_lib/productsData";
interface ProductCardProps {
  product: Products;
}
function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  return (
    <div className="group relative flex flex-col bg-[#111827] border border-[#374151] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
      <span className="bg-[#3b82f6]  absolute top-6 left-6 z-10 rounded-full bg-primary-accent text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest shadow-md">
        {product.badge}
      </span>

      <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-2xl bg-[#1F2937] flex items-center justify-center">
        <Image src={product.image} alt="" width={500} height={500} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6 pt-0 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#3B82F6] font-bold block mb-1">
              Category
            </span>

            <h3 className="text-xl font-medium text-white group-hover:text-[#3B82F6] transition-colors duration-200 line-clamp-1 leading-tight">
              {product.title}
            </h3>
          </div>

          <span className="text-[#9CA3AF] font-mono text-lg shrink-0 mt-1">
            $299
          </span>
        </div>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 line-clamp-2 flex-grow font-light">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-[#374151]/50 pt-3">
          <div className="flex items-center space-x-1.5 bg-[#1F2937]/50 px-2.5 py-1 rounded-full border border-[#374151]">
            <span className="text-[11px] font-mono text-white font-bold">
              {product.rating.rate}
            </span>

            <span className="text-[10px] text-[#9CA3AF]">(120)</span>
          </div>

          <button className="cursor-pointer bg-[#3b82f6] inline-flex items-center justify-center rounded-full p-2.5 bg-primary-accent text-white hover:bg-primary-accent-hover active:scale-90 transition-all duration-300 shadow-[0_4px_12px_rgba(59,130,246,0.2)]">
            <ShoppingBag strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
