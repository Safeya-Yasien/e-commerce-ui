import { ICartItem } from "@/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface ICartStoreProps {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getCartItemsCount: () => number;
  hasHydrated: boolean;
}

export const useCartStore = create<ICartStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],
        hasHydrated: false,
        setHasHydrated: (state: boolean) => {
          set({
            hasHydrated: state,
          });
        },
        // edit
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
        // edit
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
        getSubtotal: () => {
          return get().cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
        },
        getCartItemsCount: () => {
          return get().cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
        },
      }),

      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.hasHydrated = true;
          }
        },
      }
    ),
    {
      name: "cart",
    }
  )
);
