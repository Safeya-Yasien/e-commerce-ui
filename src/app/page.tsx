import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link";

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

      <ProductList category={category} params="homepage" />

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
