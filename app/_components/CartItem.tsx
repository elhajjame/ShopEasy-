import Image from "next/image";
import { Products } from "@/app/_lib/productsData";
type CartItemProps = {
  product: Products;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};
function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
}: CartItemProps) {
  return (
    <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#374151]/40 first:border-0">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="h-20 w-28 overflow-hidden rounded-2xl border border-[#374151] bg-[#111827] flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={150}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-widest text-[#3B82F6] font-bold block mb-0.5">
            {product.category}
          </span>

          <h3 className="text-base font-semibold text-white">
            {product.title}
          </h3>

          <span className="block text-xs text-[#9CA3AF] font-light mt-0.5 line-clamp-1">
            {product.description}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto md:space-x-8">
        <div className="flex items-center border border-[#374151] rounded-full bg-[#111827] overflow-hidden">
          <button
            onClick={onDecrease}
            className="cursor-pointer px-3.5 py-1 text-xs text-[#9CA3AF] hover:text-white hover:bg-[#1F2937] transition font-semibold"
          >
            -
          </button>

          <span className="px-3 text-xs font-mono font-bold text-white">
            {quantity}
          </span>

          <button
            onClick={onIncrease}
            className="cursor-pointer px-3.5 py-1 text-xs text-[#9CA3AF] hover:text-white hover:bg-[#1F2937] transition font-semibold"
          >
            +
          </button>
        </div>

        <div className="flex items-center space-x-4 text-right">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white font-mono">
              {product.price * quantity}
            </span>

            <span className="text-[20px] text-[#9CA3AF] font-mono">
              {product.price} each
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
