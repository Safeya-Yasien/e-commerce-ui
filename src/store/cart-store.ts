import { ICartItem } from "@/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface ICartStoreProps {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
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
          const existingItem = get().cartItems.find(
            (i) =>
              i.id === item.id &&
              i.selectedColor === item.selectedColor &&
              item.selectedSize === i.selectedSize
          );

          if (existingItem) {
            set({
              cartItems: get().cartItems.map((i) =>
                i.id === item.id &&
                i.selectedColor === item.selectedColor &&
                item.selectedSize === i.selectedSize
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            });
          } else {
            set({ cartItems: [...get().cartItems, item] });
          }
        },
        // edit
        removeFromCart: (item) => {
          set(
            (state) => ({
              cartItems: state.cartItems.filter(
                (i) =>
                  !(
                    i.id === item.id &&
                    item.selectedColor === i.selectedColor &&
                    item.selectedSize === i.selectedSize
                  )
              ),
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
