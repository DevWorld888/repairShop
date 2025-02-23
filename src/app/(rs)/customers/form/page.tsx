import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

export default async function CustomerFormPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    // Extract customerId
    const { customerId } = await searchParams

    if(customerId){
         // Fetch customer data (await works here because it's an async component)
        const customer = await getCustomer(parseInt(customerId));
        // If no customerId is provided, return early
        if (!customerId) {
            return (
                <div>
                    Customer not found <BackButton title="Go Back" variant="default" />
                </div>
            );
        }
        // Return customer form
        return <CustomerForm customer={customer} />;
    }else{
        // Return customer form
        return <CustomerForm />;
    }
}
