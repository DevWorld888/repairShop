import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
    searchParams
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    // Extract customerId
    const customerId = searchParams.customerId;

    // If no customerId is provided, return early
    if (!customerId) {
        return (
            <div>
                Customer not found <BackButton title="Go Back" variant="default" />
            </div>
        );
    }

    // Fetch customer data (await works here because it's an async component)
    const customer = await getCustomer(parseInt(customerId));

    // Handle case where customer is not found
    if (!customer) {
        return (
            <div>
                Customer not found <BackButton title="Go Back" variant="default" />
            </div>
        );
    }

    // Return customer details
    return (
        <div>
            <h1>{customer.name}</h1>
            <p>{customer.email}</p>
        </div>
    );
}
