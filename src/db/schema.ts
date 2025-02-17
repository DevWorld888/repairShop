import { serial,varchar,boolean,timestamp,integer,text, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2").default(""),
    state: varchar("state",{length:2}).notNull(),
    city: varchar("city").notNull(),
    zip: varchar("zip",{length:10}).notNull(),
    notes:text("notes"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    is_active: boolean("active").notNull().default(true),
   
})
export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customer_id: integer("customer_id").notNull().references(()=>customers.id),
    title: varchar("title").notNull(),
    description: text("description").notNull(),
    completed: boolean("completed").notNull().default(false),
    tech:varchar("tech").notNull().default("unassigned"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    is_active: boolean("active").notNull().default(true),
})

//create a relation between customers and tickets
export const customerTickets = relations(customers,({many})=>({
    tickets:many(tickets)
}))

export const ticketsRelations = relations(tickets,({one})=>({
    customer : one(customers,{
        fields:[tickets.customer_id],
        references:[customers.id]
    })
}))