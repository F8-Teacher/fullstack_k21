import z from "zod";

export const createProductSchema = z.object({
    name: z.string({ error: "Name is string" }).min(1, "Name is required"),
    price: z.number({ error: "Price is number" }),
    images: z.array(z.string("Image item {index} is string"), "Images is array"),
    meta: z.object({
        description: z.string("Description is string"),
        shortDescription: z.string("Short Description is string")
    }, "Meta is required")
    // email: z.string({ error: "Email is string" }).pipe(z.email('Email invalid')),
    // phone: z.string({ error: "Phone is string" }).optional().nullable()
})