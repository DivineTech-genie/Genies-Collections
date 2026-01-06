"use client";
import { Button } from "@/components/ui/button";
import { useBagQuantity } from "@/context/bagQuantity";
import { PRODUCTS } from "@/lib/products";
import { productPath } from "@/lib/utils";
import ZoomImage from "@/components/zoomAnimation";
import { usePathname } from "next/navigation";

const ProductsDisplay = () => {
  const { addToCart } = useBagQuantity();
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
          <div className="w-100 h-100 rounded-lg">
            <ZoomImage
              src={imageUrl}
              alt={`${matchedProduct?.name ?? ""}`}
              width={400}
              height={400}
              zoomScale={1.8}
            />
          </div>
        ) : (
          <div>No image found</div>
        )}
      </div>

      {/* About the product and add to cart*/}
      <div>
        <p>{matchedProduct?.category}</p>
        <h1>{matchedProduct?.name}</h1>
        <p>${matchedProduct?.price}</p>

        <div>
          <p>Size</p>
          <select name="" id="">
            <option value="Chose an option">Chose an option</option>
            <option value="44">44</option>
          </select>
        </div>
        <Button
          onClick={() =>
            matchedProduct &&
            addToCart({
              id: matchedProduct.id,
              name: matchedProduct.name,
              price: matchedProduct.price,
              imgUrl: imageUrl ?? "",
              category: matchedProduct.category,
              quantity: 1,
            })
          }
          className="cursor-pointer bg-zinc-400 rounded-lg text-white"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductsDisplay;
