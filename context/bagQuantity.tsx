"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuantityContextType {
  quantity: number;
  setQuantity: (quantity: number) => void;
  addQuantity: (amount: number, imgUrl: string) => void;
  removeQuantity: (amount: number) => void;
  lastImageUrl: string | null;
}

const QuantityContext = createContext<QuantityContextType | undefined>(
  undefined
);

export function BagQuantityProvider({ children }: { children: ReactNode }) {
  const [quantity, setQuantity] = useState<number>(0);
  const [lastImageUrl, setLastImageUrl] = useState<string | null>(null);

  const addQuantity = (amount: number, imageUrl: string) => {
    setQuantity((prev) => prev + amount);
    setLastImageUrl(imageUrl); // store the url for later rendering or use elsewhere
  };

  const removeQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(0, prev - amount));
  };

  return (
    <QuantityContext.Provider
      value={{
        quantity,
        setQuantity,
        addQuantity,
        removeQuantity,
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
