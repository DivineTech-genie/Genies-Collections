"use client";
import { Button } from "@/components/ui/button";
import { useBagQuantity } from "@/context/bagQuantity";
import { PRODUCTS } from "@/lib/products";
import { productPath } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProductsDisplay = () => {
  const { addQuantity } = useBagQuantity();
  const pathname = usePathname() ?? "";

  const matchedProduct = PRODUCTS.find(
    (p) => productPath(p.category, p.name) === pathname
  );

  const imageUrl: string | undefined = matchedProduct?.imgUrl;

  return (
    <div>
      {/* Display different angles of the shoe */}
      <div>
        {imageUrl ? (
          <Image src={imageUrl} alt="Shoe image" width={200} height={200} />
        ) : (
          <div>No image found</div>
        )}
      </div>

      {/* About the shoe  and add to cart*/}
      <div>
        <p>{matchedProduct?.category}</p>
        <h1>{matchedProduct?.name}</h1>
        <p>{matchedProduct?.price}</p>

        <div>
          <p>Size</p>
          <select name="" id="">
            <option value="Chose an option">Chose an option</option>
            <option value="44">44</option>
          </select>
        </div>
        <Button
          onClick={() => addQuantity(1, imageUrl ?? "")}
          className="cursor-pointer bg-zinc-400 rounded-lg text-white"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductsDisplay;
