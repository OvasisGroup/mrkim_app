"use client"
import Loader from '@/components/Loader';
import SignOut from '@/components/Signout';
import { useSession } from 'next-auth/react';
import React from 'react'

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") return <Loader/>;


  return (
    <div className='my-4'>
     {session ? (
        <p>Welcome, {session.user?.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}

      <SignOut/>
    </div>
  )
}



// <Image
// aria-hidden
// src="/globe.svg"
// alt="Globe icon"
// width={16}
// height={16}
// />


// import Image from "next/image";