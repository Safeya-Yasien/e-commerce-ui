import { z } from "zod";

export const paymentFormSchema = z.object({
  cardName: z.string().min(2, "Name must be at least 2 characters"),
  cardNumber: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(16, "Card number must be at most 16 characters"),
  expirationDate: z
    .string()
    .min(5, "Expiration date must be in MM/YY format")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date format"),
  cvv: z
    .string()
    .min(3, "CVV must be at least 3 characters")
    .max(4, "CVV must be at most 4 characters")
    .regex(/^\d+$/, "CVV must contain only digits"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
