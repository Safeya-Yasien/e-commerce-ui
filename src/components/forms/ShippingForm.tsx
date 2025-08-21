import {
  ShippingFormInputs,
  shippingFormSchema,
} from "@/schemas/shippingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../ui/button";
import CartFormInput from "./CartFormInput";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const { push } = useRouter();

  const onSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    push("/cart?step=3", { scroll: false });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <CartFormInput
        register={register}
        error={errors.name?.message}
        name="name"
        label="name"
        placeholder="John Doe"
      />{" "}
      {/* Email */}
      <CartFormInput
        register={register}
        error={errors.email?.message}
        name="email"
        label="email"
        placeholder="john@example.com"
      />{" "}
      {/* Phone */}
      <CartFormInput
        register={register}
        error={errors.phone?.message}
        name="phone"
        label="phone"
        placeholder="123456789"
      />{" "}
      {/* Address */}
      <CartFormInput
        register={register}
        error={errors.address?.message}
        name="address"
        label="address"
        placeholder="123 Main St"
      />
      {/* city */}
      <CartFormInput
        register={register}
        error={errors.city?.message}
        name="city"
        label="city"
        placeholder="New York"
      />
      <Button type="submit" className="cursor-pointer">
        Continue <ArrowRight className="w-3 h-3 mt-[4px]" />
      </Button>
    </form>
  );
};

export default ShippingForm;
