import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      {/* img */}
      <Link href={"/"} className="">
        <div className="relative aspect-[2/3]">
          <Image
            src={"/products/1g.png"}
            alt=""
            className="object-cover hover:scale-105 transition-transform duration-300 "
            fill
          />
        </div>
      </Link>

      {/* info */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">product.name</h1>
        <p className="text-sm text-gray-500">product.shortDescription</p>

        <div className="text-xs flex items-center gap-4">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <span className=" text-gray-500">Size</span>
            <select className="ring ring-gray-300 rounded-md px-3 py-1">
              <option className="uppercase">S</option>
            </select>
          </div>

          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              <button className="w-4 h-4 rounded-full bg-gray-300 cursor-pointer"></button>
              <button className="w-4 h-4 rounded-full bg-purple-500 "></button>
              <button className="w-4 h-4 rounded-full bg-green-500"></button>
            </div>
          </div>
        </div>

        {/* price */}
        <div className="flex items-center justify-between">
          <p className="font-medium">$33.39</p>
          <button className="flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ">
            <ShoppingCart className="w-4 h-4 " />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
