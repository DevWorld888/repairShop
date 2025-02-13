import {db} from '@/db';
import {tickets} from '@/db/schema';
import {eq} from 'drizzle-orm'

export interface Ticket {
    id: number;
    customer_id: number;
    title: string;
    description: string;
    completed: boolean;
    tech: string;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
  }

export async function getTicket(id: number): Promise<Ticket | null> {
    const ticket = await db.select().from(tickets).where(eq(tickets.id, id))
    if (ticket.length === 0) {
        return null;
    }
    return ticket[0];
}

