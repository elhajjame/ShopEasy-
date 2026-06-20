"use client";

import { useState } from "react";
import { useCart } from "@/app/_context/CartContext";
import { Products } from "@/app/_lib/productsData";

interface ProductProps {
  product: Products;
}

export default function AddToCart({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const inc = () => setQuantity((prev) => prev + 1);

  const dec = () => setQuantity((prev) => Math.max(1, prev - 1));

  const totalPrice = product.price * quantity;

  return (
    <div className="space-y-4">
      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={dec}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          -
        </button>

        <span className="text-white">{quantity}</span>

        <button
          onClick={inc}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addToCart(product, quantity)}
        className="cursor-pointer w-full bg-blue-500 text-white py-3 rounded-full"
      >
        Add To Cart — {totalPrice} DHs
      </button>
    </div>
  );
}
