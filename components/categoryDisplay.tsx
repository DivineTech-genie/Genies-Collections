import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { productPath } from "@/lib/utils";

const CategoryDisplay = ({ category }: { category: string }) => {
  return (
    <section>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>

      <div className="flex gap-4">
        <p>Returns Policy</p>
        <p>Shipping Policy</p>
        <p>Privacy Policy</p>
      </div>

      <div>
        <small>SHOWING 1-12 OF 62 RESULTS</small>
      </div>

      <div>
        {/* filter */}
        <div>
          <p>Price filter</p>
        </div>

        {/* Display the products */}
        <div className="grid grid-cols-4 gap-6">
          {PRODUCTS.filter((product) => product.category === category).map(
            ({ id, name, category, price, imgUrl }) => (
              <div key={id}>
                <Link href={productPath(category, name)}>
                  <div className="overflow-hidden rounded-2xl w-52 h-52">
                    <Image
                      src={imgUrl}
                      alt={name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>${price.toFixed(2)}</p>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryDisplay;
