// import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link";
// import { Suspense } from "react";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <div className="aspect-[3/1] mb-12 relative ">
        <Image src={"/featured.webp"} alt="Featured Product" fill />
      </div>

      {/* <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
      > */}
      <ProductList category={category} params="homepage" />
      {/* </Suspense> */}

      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        aria-label="View all products"
        className="capitalize underline flex justify-end mt-4 text-sm text-gray-500"
      >
        view all products
      </Link>
    </div>
  );
};

export default Homepage;
