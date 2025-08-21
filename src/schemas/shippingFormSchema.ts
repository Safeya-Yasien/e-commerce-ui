import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  address: z.string().min(5, "Address too short"),
  city: z.string().min(2, "City must be at least 2 characters"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
