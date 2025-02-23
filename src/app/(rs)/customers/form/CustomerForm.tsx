"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  insertCustomerSchema,
  type insertCustomerSchemaType,
  type selectCustomerSchemaType,
} from "@/zod-schemas/customer";

type Props = {
  customer?: selectCustomerSchemaType;
};

export default function CustomerForm({ customer }: Props) {
  const defaultValues: insertCustomerSchemaType = {
    id: customer?.id || 0,
    firstName: customer?.firstName || "",
    lastName: customer?.lastName || "",
    address1: customer?.address1 || "",
    city: customer?.city || "",
    state: customer?.state || "",
    zip: customer?.zip || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    notes: customer?.notes || "",
  };

  // ✅ Correct single useForm() call
  const form = useForm<insertCustomerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });

  async function onSubmit(data: insertCustomerSchemaType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-lg font-semibold">
          {customer?.id ? "Edit" : "Add"} Customer Form
        </h2>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col sm:flex-grow gap-4 sm:gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
          
        >
          <p>{JSON.stringify(form.getValues())}</p>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
