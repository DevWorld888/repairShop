import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTickets";
import {BackButton} from "@/components/BackButton";

export default async function TicketFormPage({ 
    searchParams
 }:{
    searchParams: { [key: string]: string | undefined }
}) {
    const { ticketId, customerId} = searchParams;
     // If no customerId is provided, return early
     if (!customerId && !ticketId) {
        return (
            <div>
                Ticket ID or Customer Id required to load ticket form<BackButton title="Go Back" variant="default" />
            </div>
        );
    }
     // Fetch customer data (await works here because it's an async component)
     if(customerId){
        const customer = await getCustomer(parseInt(customerId));
        // Handle case where customer is not found  
        if (!customer) {
            return (
                <div>
                    Customer not found <BackButton title="Go Back" variant="default" />
                </div>
            );
        }
        if(!customer.active){
            return (
                <div>
                    Customer is not active <BackButton title="Go Back" variant="default" />
                </div>
            );
        }
        console.log(customer);
     }
     if(ticketId){
        const ticket = await getTicket(parseInt(ticketId));
        // Handle case where ticket is not found  
        if (!ticket) {
            return (
                <div>
                    Ticket not found <BackButton title="Go Back" variant="default" />
                </div>
            );
        }
        const customer = await getCustomer(ticket.customer_id);
        console.log("ticket",ticket);
        console.log("customer",customer);
     }
    
}