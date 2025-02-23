"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { insertTicketSchema, 
         type insertTicketSchemaType,
         type selectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { selectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
  customer?: selectCustomerSchemaType,
  ticket?: selectTicketSchemaType,

};

export default function TicketForm({ 
    customer, ticket 
}: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    customer_id: ticket?.customer_id ?? customer.id ,
    title: ticket?.title || "",
    description: ticket?.description || "",
    completed: ticket?.completed || false,
    tech: ticket?.tech || "",
  };

  // ✅ Correct single useForm() call
  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  async function onSubmit(data: insertTicketSchemaType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-lg font-semibold">
          {ticket?.id ? "Edit" : "New"} Ticket {ticket?.id ? `# ${ticket.id}` : "Form"} Ticket Form
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