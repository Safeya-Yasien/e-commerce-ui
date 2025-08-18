import { IProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      {/* img */}
      <Link href={"/"} className="">
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            className="object-cover hover:scale-105 transition-transform duration-300 "
            fill
          />
        </div>
      </Link>

      {/* info */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>

        <div className="text-xs flex items-center gap-4">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <span className=" text-gray-500">Size</span>
            <select className="ring ring-gray-300 rounded-md px-3 py-1">
              {product.sizes.map((size) => (
                <option className="uppercase" key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <button
                  className="w-4 h-4 rounded-full cursor-pointer"
                  key={color}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* price */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
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
