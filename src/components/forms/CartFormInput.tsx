import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ICartFormInput<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  label: string;
  name: Path<T>;
  placeholder: string;
}

const CartFormInput = <T extends FieldValues>({
  register,
  error,
  name,
  label,
  placeholder,
}: ICartFormInput<T>) => {
  return (
    <div className="grid gap-1">
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="px-0 border-0 border-b border-gray-200 py-2 text-sm rounded-none shadow-none focus-visible:ring-0 focus:outline-none"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
export default CartFormInput;
