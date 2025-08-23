"use client";

import { useCartStore } from "@/store/cart-store";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CartSummary = ({ activeStep }: { activeStep: number }) => {
  const { push } = useRouter();

  const { cartItems } = useCartStore();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount + 10;

  return (
    <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
      <h2 className="font-semibold">Cart Details</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium">$ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Discount(10%)</p>
          <p className="font-medium">$ 10</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Shipping Fee</p>
          <p className="font-medium">$10</p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between">
          <p className="text-gray-800 font-semibold">Total</p>
          <p className="font-medium">$ {total.toFixed(2)}</p>
        </div>
      </div>
      {activeStep === 1 && (
        <button
          onClick={() => push("/cart?step=2", { scroll: false })}
          className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};
export default CartSummary;
