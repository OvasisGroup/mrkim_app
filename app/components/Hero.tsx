import React from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className='container w-full mx-auto'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-12 mt-4 mb-4 '>
        <div className='flex flex-col justify-center  col-span-8 md:w-full bg-maingreen text-white p-4 md:p-16 rounded-3xl h-full' >
        <h1 className='text-4xl font-black text-mainyellow p-4'>Get the right local Pro</h1>
        <h1 className='text-4xl font-black text-mainyellow'>in your area for any project.</h1>
        <div className='flex gap-4 justify-center items-center mt-4 p-2 rounded-md bg-white'>
        <Input type='text' className='w-full h-10 p-2  text-white bg-white rounded-md outline-none' placeholder='Enter your zip code' />
        <Button className='bg-mainyellow text-maingreen'>Search</Button>
        </div>
        <p className=' text-white  mt-4 text-sm'>We have the best SKILLS and custom services for your PROJECT Go Premium</p>
        </div>
        <div className='text-white rounded-md col-span-4 md:block hidden'>
          <Image 
          src='/images/foursquare.png' 
          alt='mrkim logo' 
          layout='responsive'
          width={2400} 
          height={16}
           />
        </div>
      </div>
    </section>
  )
}


