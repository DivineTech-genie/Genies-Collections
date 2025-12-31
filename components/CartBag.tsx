"use client";
import { useBagQuantity } from "@/context/bagQuantity";
import Image from "next/image";

const CartBag = () => {
  const { lastImageUrl } = useBagQuantity(); // <-- call the hook

  if (!lastImageUrl) return null; // avoid passing undefined to Image

  return (
    <div className="relative w-48 h-48">
      <Image src={lastImageUrl} alt="Shoes" fill />
    </div>
  );
};

export default CartBag;
