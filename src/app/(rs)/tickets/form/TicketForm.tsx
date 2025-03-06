"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputWithLabels } from "@/components/inputs/InputWithLabels";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabels";
import { SelectWithLabels } from "@/components/inputs/SelectWithLabel";
import {
  insertTicketSchema,
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
    customer_id: ticket?.customer_id ?? customer.id,
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
          className="flex flex-col md:flex-row gap-4 md:gap-8"
          onSubmit={form.handleSubmit(onSubmit)}

        >
          {/* <p>{JSON.stringify(form.getValues())}</p> */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabels<insertTicketSchemaType>
              fieldTitle="Title"
              nameInSchema="title"

            />
            <InputWithLabels<insertTicketSchemaType>
              fieldTitle="Tech"
              nameInSchema="tech"
              disabled={true}
            />
            <div className="mt-4 space-x-2">
              <h3 className="text-lg">Customer Info</h3>
              <hr className="w-4/5" />
              <p>{customer?.firstName} {customer?.lastName}</p>
              <p>{customer?.address1}</p>
              {customer?.address2 && <p>{customer?.address2}</p>}
              <p>{customer?.city}, {customer?.state} {customer?.zip}</p>
              <p>{customer?.email}</p>
              <p>{customer?.phone}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <TextAreaWithLabel<insertTicketSchemaType>
              fieldTitle="Description"
              nameInSchema="description"
              className="h-40"
            />
            <div className="flex gap-2">
              <Button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="primary"
                title="Save"
                
                >
                Submit
              </Button>
              <Button type="buton"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="destructive"
                title="Reset"
                onClick={() => form.reset(defaultValues)}
                >
                Reset
              </Button>

            </div>
          </div>
         
        </form>
      </Form>
    </div>
  );
}