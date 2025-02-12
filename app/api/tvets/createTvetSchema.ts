import { z } from "zod";

export const createTvetSchema = z.object({
    title: z.string().min(1, 'Title is Required').max(255),
});
