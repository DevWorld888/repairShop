"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputWithLabels } from "@/components/inputs/InputWithLabels";
import {
  insertCustomerSchema,
  type insertCustomerSchemaType,
  type selectCustomerSchemaType,
} from "@/zod-schemas/customer";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabels";
import { SelectWithLabels } from "@/components/inputs/SelectWithLabel";
import { StateArray } from "@/constants/StatesArrays";
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
          
           className="flex flex-col md:flex-row gap-4 md:gap-8"
          onSubmit={form.handleSubmit(onSubmit)}

        >
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="First Name"
              nameInSchema="firstName"

            />
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="Last Name"
              nameInSchema="lastName"

            />
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="Address"
              nameInSchema="address1"

            />
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="City"
              nameInSchema="city"

            />
            <SelectWithLabels<insertCustomerSchemaType>
              fieldTitle="State"
              nameInSchema="state"
              data={StateArray} 
            />           

          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="Zip"
              nameInSchema="zip"

            />
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="Email"
              nameInSchema="email"

            />
            <InputWithLabels<insertCustomerSchemaType>
              fieldTitle="Phone"
              nameInSchema="phone"

            />
           
            <TextAreaWithLabel<insertCustomerSchemaType>
              fieldTitle="Notes"
              nameInSchema="notes"
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
          {/* <p>{JSON.stringify(form.getValues())}</p> */}
         
        </form>
      </Form>
    </div>
  );
}
