import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

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
                <Link
                  href={`/product-category/${category}/${name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <div className="overflow-hidden rounded-2xl w-50 h-50">
                    <Image
                      src={imgUrl}
                      alt={name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-200"
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>{price}</p>
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
