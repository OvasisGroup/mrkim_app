"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation"


interface FormData {
  title: string;
}

const Aboutpage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    axios.post("/api/tvets", data);
    router.push('/')
    console.log(data);
  };

  return (
    <div>
      <h1>About Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title")} // Ensure the input is registered properly
          className='mb-4 outline-none'
          placeholder='Enter your name'
        />
        <Button variant="outline" className='w-full' type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Aboutpage
