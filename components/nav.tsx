"use client";

import { useBagQuantity } from "@/context/bagQuantity";

export const SubNav = () => {
  return (
    <>
      <div className="flex justify-between bg-black text-white ">
        <p>Free worldwide shipping for all orders over $50</p>

        <ul className="flex space-x-4">
          <li>Returns Policy</li>
          <li>Shipping Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  );
};

export const Nav = () => {
  const { quantity } = useBagQuantity();
  return (
    <>
      {/* main nav */}

      <div className="flex justify-between w-11/12 mx-auto">
        <h1>DC Store</h1>

        <ul className="flex space-x-2">
          <li>Shop Categories</li>
          <li>Categories</li>
        </ul>

        <ul className="flex space-x-2">
          <li>Search</li>
          <li>
            Bag <small>{quantity}</small>
          </li>
        </ul>
      </div>
    </>
  );
};
