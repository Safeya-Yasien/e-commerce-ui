"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const currentSort = searchParams.get("sort") || "new";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", filter);
    push(`${pathname}?${params.toString()}`, { scroll: false });
    return;
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <label htmlFor="sort">Sort by: </label>
      <select
        id="sort"
        value={currentSort}
        className="capitalize ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value={"new"}>Newest</option>
        <option value={"oldest"}>Oldest</option>
        <option value={"asc"}>price low to high</option>
        <option value={"desc"}>price high to low</option>
      </select>
    </div>
  );
};
export default Filter;
