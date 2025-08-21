import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../ui/button";

import CartFormInput from "./CartFormInput";
import {
  PaymentFormInputs,
  paymentFormSchema,
} from "@/schemas/paymentFormSchema";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Card Name */}
      <CartFormInput
        register={register}
        error={errors.cardName?.message}
        label="card name"
        name="cardName"
        placeholder="John Doe"
      />{" "}
      {/* Card Number */}
      <CartFormInput
        register={register}
        error={errors.cardNumber?.message}
        label="card number"
        name="cardNumber"
        placeholder="123456789123"
      />{" "}
      {/* Expiration Date */}
      <CartFormInput
        register={register}
        error={errors.expirationDate?.message}
        label="expiration Date"
        name="expirationDate"
        placeholder="01/32"
      />{" "}
      {/* CVV */}
      <CartFormInput
        register={register}
        error={errors.cvv?.message}
        name="cvv"
        label="cvv"
        placeholder="123"
      />
      <Button type="submit" className="cursor-pointer">
        Continue <ArrowRight className="w-3 h-3 mt-[4px]" />
      </Button>
    </form>
  );
};
export default PaymentForm;
