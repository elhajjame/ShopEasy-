"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Products } from "../_lib/productsData";
// & act like extends
type CartItem = Products & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Products, quantity: number) => void;
  decQuantity: (id: number) => void;
  incQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Products, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };
  const incQuantity = (id: number) => {
    setCart((perv) =>
      perv.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decQuantity = (id: number) => {
    setCart((perv) =>
      perv.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incQuantity, decQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
