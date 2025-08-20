"use client";

import { IProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    color: product.colors[0],
    size: product.sizes[0],
  });

  const handleChange = (key: "color" | "size", value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-col ">
      {/* img */}
      <Link
        href={`/products/${product.id}`}
        className=""
        aria-label={`View details for ${product.name}`}
      >
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[selectedOptions.color]}
            alt={product.name}
            className="object-cover hover:scale-105 transition-transform duration-300 "
            fill
          />
        </div>
      </Link>

      {/* info */}
      <div className="flex flex-col gap-4 p-4 flex-1">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>

        <div className="text-xs flex items-center gap-4">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <label htmlFor={`size-${product.name}`} className=" text-gray-500">
              Size
            </label>
            <select
              id={`size-${product.name}`}
              aria-label="Select size"
              className="ring ring-gray-300 rounded-md px-3 py-1"
              value={selectedOptions.size}
              onChange={(e) => handleChange("size", e.target.value)}
            >
              {product.sizes.map((size) => (
                <option className="uppercase" key={size} value={size}>
                  {size.toUpperCase()}
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
                  type="button"
                  aria-label={color}
                  className={`w-5 h-5 rounded-full cursor-pointer  flex items-center justify-center ${
                    selectedOptions.color === color
                      ? "border border-gray-400 "
                      : ""
                  }`}
                  key={color}
                  onClick={() => handleChange("color", color)}
                >
                  <span
                    className="w-4 h-4 block rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* price */}
        <div className="flex items-center justify-between mt-auto">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 "
          >
            <ShoppingCart className="w-4 h-4 " aria-hidden="true" />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
