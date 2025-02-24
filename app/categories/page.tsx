/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";

export default function CreateCategoryPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [message, setMessage] = useState("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Preview the selected image
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !image) {
            setMessage("Name and image are required.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await axios.post("/api/categories", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setMessage(response.data.message);
            setName("");
            setDescription("");
            setImage(null);
            setPreview(null);
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
            <h1 className="text-xl font-bold mb-4">Create Category</h1>

            {message && <p className="text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Category Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {preview && (
                        <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Create Category
                </button>
            </form>
        </div>
    );
}
