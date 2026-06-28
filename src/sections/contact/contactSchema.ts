import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
