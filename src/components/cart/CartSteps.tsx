"use client";

import { ShippingFormInputs } from "@/schemas/shippingFormSchema";
import { useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { ShippingForm, PaymentForm } from "@/components/forms";
import CartItem from "./CartItem";

const CartSteps = ({ activeStep }: { activeStep: number }) => {
  const { cartItems, removeFromCart, clearCart } = useCartStore();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
      {activeStep === 1 ? (
        <>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id + item.selectedColor + item.selectedSize}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}

              <button
                onClick={clearCart}
                className="mt-4 cursor-pointer self-end px-5 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-200 text-sm font-medium"
              >
                Remove all items
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          )}
        </>
      ) : activeStep === 2 ? (
        <ShippingForm setShippingForm={setShippingForm} />
      ) : activeStep === 3 && shippingForm ? (
        <PaymentForm />
      ) : (
        <p>No step</p>
      )}
    </div>
  );
};
export default CartSteps;
