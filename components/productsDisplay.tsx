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
    <div className="flex justify-around mt-12">
      {/* Display different angles of the shoe */}
      <div>
        <div>
          {imageUrl ? (
            <div className="w-full h-[75vh]">
              <ZoomImage
                src={imageUrl}
                alt={matchedProduct?.name}
                width={400}
                height={400}
                zoomScale={1.4}
              />
            </div>
          ) : (
            <div>No image found</div>
          )}
        </div>

        {/* Sub images */}
        <div className="mt-12">
          {matchedProduct?.subImgUrl && (
            <div className="grid grid-cols-2 space-y-4 space-x-4">
              {matchedProduct.subImgUrl.map((url, index) => (
                <div key={index} className="w-52 h-52">
                  <ZoomImage
                    src={url}
                    alt={`${matchedProduct.name} sub image ${index + 1}`}
                    width={400}
                    height={400}
                    zoomScale={4.0}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* About the product and add to cart*/}
      <div>
        <p>{matchedProduct?.category}</p>
        <h1>{matchedProduct?.name}</h1>
        <p>
          {matchedProduct?.price ? `$${matchedProduct.price.toFixed(2)}` : ""}
        </p>

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
