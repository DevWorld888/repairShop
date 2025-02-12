// seed.js
import {db} from '@/db/index' // Adjust the import based on your setup
import { tickets } from "@/db/schema"; // Import your tickets model

const ticketsData = [
    { customer_id: 7, title: 'Issue with login', description: 'Unable to log in to the website.', completed: false, tech: 'unassigned' },
    { customer_id: 8, title: 'Payment processing error', description: 'My payment was declined.', completed: false, tech: 'unassigned' },
    // Add more tickets as needed
];

async function seedDatabase() {
    for (const ticket of ticketsData) {
        await db.insert(tickets).values(ticket);
    }
    console.log('Database seeded successfully!');
}

seedDatabase().catch(console.error);
// In this example, we import the database connection and the tickets model from their respective files. We then define an array of ticket data to be inserted into the database. The seedDatabase function iterates over the data array and inserts each ticket into the database using the insert method provided by Drizzle ORM.