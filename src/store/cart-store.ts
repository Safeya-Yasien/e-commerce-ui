import { ICartItem } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICartStoreProps {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<ICartStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],
        addToCart: (item: ICartItem) => {
          const existingItem = get().cartItems.find((i) => i.id === item.id);

          if (existingItem) {
            set(
              (state) => ({
                cartItems: state.cartItems.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                ),
              }),
              false,
              "cart/addToCar"
            );
          } else {
            set(
              (state) => ({
                cartItems: [...state.cartItems, item],
              }),
              false,
              "cart/addNewItem"
            );
          }
        },
        removeFromCart: (id: number) => {
          set(
            (state) => ({
              cartItems: state.cartItems.filter((item) => item.id !== id),
            }),
            false,
            "cart/removeFromCart"
          );
        },
        clearCart: () => {
          set(() => ({ cartItems: [] }), false, "cart/clearCart");
        },
      }),
      {
        name: "cart",
      }
    ),
    {
      name: "cart",
    }
  )
);
