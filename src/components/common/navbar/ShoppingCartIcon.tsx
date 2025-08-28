"use client";

import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { hasHydrated, cartItems } = useCartStore();
  if (!hasHydrated) return null;

  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 w-4 h-4 rounded-full flex items-center justify-center bg-amber-400 text-gray-600 text-xs font-medium ">
        {cartItems.length}
      </span>
    </Link>
  );
};
export default ShoppingCartIcon;
