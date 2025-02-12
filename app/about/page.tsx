"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { zodResolver } from '@hookform/resolvers/zod'; 
import { createTvetSchema } from "../api/tvets/createTvetSchema";
import { z } from "zod";
// import { Terminal } from "lucide-react"

type FormData = z.infer<typeof createTvetSchema>;

const Aboutpage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(createTvetSchema),
  });
  const [error, setError] = useState('');


  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/tvets", data);
      if (response.status === 201) {
        router.push('/');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('An error occurred while creating the TVET');
    }

  };

  return (
    <div className="flex flex-col items-start justify-start w-[1400px] mx-auto"> 
    {error &&
      <Alert variant="destructive" className="mb-4 bg-red-100">
        <AlertTitle className="font-bold text-red-500">Alert!</AlertTitle>
        <AlertDescription className="text-red-500">
          {error}
        </AlertDescription>
      </Alert>}
      <h1>About Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Input
          {...register("title")} // Ensure the input is registered properly
          className='mb-4 outline-none'
          placeholder='Enter your name'
        />
        {errors.title && <p className="text-red-500">Title is required</p>}
        <Button variant="outline" className='w-full' type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Aboutpage
