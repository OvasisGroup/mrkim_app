"use client"
// import Loader from '@/app/components/Loader';
// import SignOut from '@/app/components/Signout';
// import { useSession } from 'next-auth/react';
// import { useTranslations } from 'next-intl';
import React from 'react'
import HeroSection from './components/Hero'
// import HeroSection from './components/Hero';

export default function Home() {
  // const t = useTranslations('HomePage');
  // console.log(t('title'));
  // const { data: session, status } = useSession();
  // if (status === "loading") return <Loader/>;


  return (
    <div className='flex items-center'>
     <HeroSection/>
    </div>
  )
}


// {session ? (
//   <p>Welcome, {session.user?.name}!</p>
// ) : (
//   <p>You are not logged in.</p>
// )}

// {/* <HeroSection/>

// <SignOut/> */}