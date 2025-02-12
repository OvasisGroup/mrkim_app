 import { NextRequest, NextResponse } from 'next/server'
 import { z } from 'zod';
 import prisma from '../../../prisma/client' 

 const createTvetSchema = z.object({
    title: z.string().min(1).max(255),
 });
 
 export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Use safeParse to get success and error fields
        const validation = createTvetSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { errors: validation.error.errors },
                { status: 400 }
            );
        }

        // Create TVET entry
        const tvet = await prisma.tvets.create({
            data: {
                title: body.title,
            },
        });

        return NextResponse.json(
            { message: "Tvet created successfully", tvet },
            { status: 201 }
        );
    } catch (error) {
        let errorMessage = "Something went wrong";

        // Ensure error is an instance of Error before accessing message
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        );
    }
 }