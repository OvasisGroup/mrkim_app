import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/client' 
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        // Parse form data
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const file = formData.get("image") as File;

        if (!name || !file) {
            return NextResponse.json({ message: "Name and image are required" }, { status: 400 });
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Save file to /public/uploads
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(process.cwd(), "public/uploads", fileName);
        await writeFile(filePath, buffer);

        const imageUrl = `/uploads/${fileName}`;

        // Save category in DB
        const category = await prisma.category.create({
            data: { name, description, image: imageUrl },
        });

        return NextResponse.json({ message: "Category created successfully", category }, { status: 201 });

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

export const config = { api: { bodyParser: false } };




// import prisma from '../../../prisma/client' 
// import { createCategorySchema } from './createCategorySchema';