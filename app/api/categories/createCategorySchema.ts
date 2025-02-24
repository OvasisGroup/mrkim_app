import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string().min(1, 'name is Required').max(255),
    description: z.string().min(1, 'description is Required').max(255),
    image: z.string().min(1, 'image is Required').max(255),
});