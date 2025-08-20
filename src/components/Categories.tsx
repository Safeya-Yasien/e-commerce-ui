"use client";

import { categories } from "@/data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const selectedCategory = searchParams.get("category") || "all";

  const handleClick = (slug: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("category", slug || "all");
    push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <button
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            selectedCategory === category.slug ? "bg-white" : "text-[#373B43]"
          }`}
          aria-label={category.name}
          key={category.slug}
          onClick={() => handleClick(category.slug)}
        >
          <category.icon className="h-6 w-6 text-gray-700" />
          <span className="ml-2 text-sm font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};
export default Categories;
