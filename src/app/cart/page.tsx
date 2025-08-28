"use client";

import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import PaymentForm from "@/components/forms/PaymentForm";
import ShippingForm from "@/components/forms/ShippingForm";
import StepsIndicator from "@/components/StepsIndicator";
import { ShippingFormInputs } from "@/schemas/shippingFormSchema";
import { useCartStore } from "@/store/cart-store";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cartItems, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your shopping cart</h1>

      {/* steps */}
      <StepsIndicator activeStep={activeStep} />

      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* cart items */}
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

        {/* total */}
        <CartSummary activeStep={activeStep} />
      </div>
    </div>
  );
};
export default CartPage;
