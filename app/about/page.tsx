"use client"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import Spinner from "@/app/components/Spinner";
import { createTvetSchema } from "../api/tvets/createTvetSchema";
// import { Terminal } from "lucide-react"

type FormData = z.infer<typeof createTvetSchema>;

const Aboutpage = () => {
  
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(createTvetSchema),
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/tvets", data);
      if (response.status === 201) {
        router.push('/');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSubmitting(false);
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
      <h1 className="my-4">About Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Input
          {...register("title")} // Ensure the input is registered properly
          className=' outline-none'
          placeholder='Enter your name'
        />
        {errors.title && <small className="text-red-500">Title is required</small>}
        <Button variant="outline" className='w-full mt-2' type="submit" disabled={isSubmitting}>
          Submit {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  )
}

export default Aboutpage
