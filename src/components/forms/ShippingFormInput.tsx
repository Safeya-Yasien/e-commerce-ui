import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ShippingFormInputs } from "@/schemas/shippingFormSchema";

interface IShippingFormInput {
  register: UseFormRegister<ShippingFormInputs>;
  error?: string;
  label: keyof ShippingFormInputs;
  placeholder: string;
}

const ShippingFormInput = ({
  register,
  error,
  label,
  placeholder,
}: IShippingFormInput) => {
  return (
    <div className="grid gap-1">
      <Label htmlFor={label} className="capitalize">
        {label}
      </Label>
      <Input
        id={label}
        placeholder={placeholder}
        {...register(label)}
        className="px-0 border-0 border-b border-gray-200 py-2 text-sm rounded-none shadow-none focus-visible:ring-0 focus:outline-none"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
export default ShippingFormInput;
