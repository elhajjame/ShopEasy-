"use client";
import EmptyCart from "../_components/EmptyCart";
import { useCart } from "../_context/CartContext";
import CartItem from "@/app/_components/CartItem";
export default function Page() {
  const { cart, incQuantity, decQuantity } = useCart();

  const subtotal: number = cart.reduce((total, item) => total + item.price, 0);

  return cart.length > 0 ? (
    <main className="flex-grow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#374151]/50 mb-10">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-white uppercase">
              Your Shopping Bag
            </h1>

            <span className="font-mono text-xs text-[#9CA3AF] bg-[#111827] px-3 py-1 rounded-full border border-[#374151]">
              items {cart.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-4 divide-y divide-[#374151]/40 border-b border-[#374151]/40">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  quantity={item.quantity}
                  onIncrease={() => incQuantity(item.id)}
                  onDecrease={() => decQuantity(item.id)}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#9CA3AF] pt-4">
              <span>
                Shift Mono hardware is secured with encrypted checkout & 2-year
                warranty cover levels.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-[#374151] bg-[#111827]/40 p-6 space-y-6">
              <h2 className="text-md font-bold text-white uppercase tracking-widest font-mono">
                Order Review
              </h2>

              <div className="border-t border-[#374151]/50 pt-4 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">
                    Subtotal Sourcing Costs
                  </span>

                  <span className="font-semibold text-white font-mono"></span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Ground Delivery</span>

                  <span className="font-mono text-[#3B82F6] uppercase font-bold text-[10px]">
                    Free Shipping
                  </span>
                </div>

                <div className="flex justify-between border-t border-[#374151]/50 pt-4">
                  <span className="text-white uppercase tracking-widest font-mono text-xs">
                    Total Bill Balance
                  </span>

                  <span className="text-white font-mono text-lg">
                    {subtotal} DHs
                  </span>
                </div>
              </div>

              <button className="cursor-pointer w-full rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white">
                Proceed to Secure Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <EmptyCart />
  );
}
