import { ICartItem } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const CartItem = ({
  item,
  removeFromCart,
}: {
  item: ICartItem;
  removeFromCart: (id: number) => void;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8">
        {/* item image */}
        <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        {/* item details */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
            <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
          </div>
          <p className="font-medium">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
      >
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
};
export default CartItem;
