"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  imgUrl?: string;
  category?: string;
  quantity: number;
};

interface QuantityContextType {
  quantity: number; // total items in cart (derived)
  total: number; // total price of items in cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  lastImageUrl: string | null;
}

const QuantityContext = createContext<QuantityContextType | undefined>(
  undefined
);

export function BagQuantityProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastImageUrl, setLastImageUrl] = useState<string | null>(null);

  const addToCart = (
    item: Omit<CartItem, "quantity"> & { quantity?: number }
  ) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
            : i
        );
      }
      const newItem: CartItem = {
        ...item,
        quantity: item.quantity ?? 1,
      } as CartItem;
      return [...prev, newItem];
    });

    if (item.imgUrl) setLastImageUrl(item.imgUrl);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const quantity = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <QuantityContext.Provider
      value={{
        quantity,
        total,
        cart,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
        lastImageUrl,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

export function useBagQuantity() {
  const context = useContext(QuantityContext);
  if (context === undefined) {
    throw new Error("useBagQuantity must be used within a BagQuantityProvider");
  }
  return context;
}
