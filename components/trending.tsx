import { CATEGORIES } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Trending = () => {
  return (
    <section className="mt-24">
      <h1 className="text-center">Trending Categories</h1>

      <div className="flex justify-center gap-14 mt-12">
        {CATEGORIES.map(({ category, coverImg, total_item, linkPath }) => (
          <div key={category}>
            <Link href={linkPath}>
              <Image
                src={coverImg}
                alt={`${category} category cover image`}
                width={200}
                height={100}
                className="rounded-2xl"
              />

              <div className="flex justify-center gap-2 py-4">
                <h3>{category}</h3>
                <small>{total_item}</small>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
