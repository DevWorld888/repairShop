import { createInsertSchema ,createSelectSchema } from 'drizzle-zod';  
import { customers } from '@/db/schema';
import { z } from 'zod';
export const insertCustomerSchema = createInsertSchema(customers,{
    firstName: z.string().min(1, "First name is required"),
    lastName:z.string().min(1,"Last name is required"),
    address1:z.string().min(1,"Address is required"),
    city:z.string().min(1,"City is required"),
    state: z.string().length(2, "State must be 2 characters"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid zip code").min(1, "Zip code is required"),
    phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number").min(1, "Phone number is required"), 
});

export const selectCustomerSchema = createSelectSchema(customers);
export type insertCustomerSchemaType = typeof insertCustomerSchema._type
export type selectCustomerSchemaType = typeof selectCustomerSchema._type



