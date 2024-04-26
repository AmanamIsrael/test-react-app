import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactUsData = z.infer<typeof ContactUsSchema>;
