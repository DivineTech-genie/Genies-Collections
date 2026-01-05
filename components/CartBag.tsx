"use client";
import { useBagQuantity } from "@/context/bagQuantity";
import Image from "next/image";

const CartBag = () => {
  const { cart, removeFromCart, updateItemQuantity, total } = useBagQuantity();

  if (!cart || cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          <Image
            src={item.imgUrl ?? ""}
            alt={item.name}
            width={64}
            height={64}
            className="rounded"
          />

          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
            <div className="flex items-center gap-3 mt-1">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="font-medium">{item.quantity}</span>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>

          <div>
            <button
              className="text-sm text-red-600"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="pt-4 border-t">
        <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartBag;
