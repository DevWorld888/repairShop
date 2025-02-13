import {db} from '@/db';
import {customers} from '@/db/schema';
import {eq} from 'drizzle-orm'


export async function getCustomer(id: number): Promise<customer | null> {
    const customer = await db.select().from(customers).where(eq(customers.id, id))
    if (customer.length === 0) {
        return null;
    }
    return customer[0];
}

