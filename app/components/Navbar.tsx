"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
// import { useRouter } from "next/router";
import Image from "next/image";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { data: session } = useSession();
    //   const router = useRouter();

    // const user = {
    //     name: "John Doe",
    //     avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with user avatar URL
    //     authenticated: false, // Set to false if user is not logged in
    // };

    // Handle language change
    const changeLanguage = (lang: string) => {
        console.log("Language changed to:", lang);
        setLangOpen(false);
    };

    return (
        <header className="border-b border-gray-200 dark:border-gray-700  top-0 left-0 right-0 z-10">
        <nav className="bg-white dark:bg-gray-900 py-2">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                        <Link className='text-2xl font-bold' href='/'>
                            <Image
                                aria-hidden
                                src="/images/mrkim-logo.svg"
                                alt="Globe icon"
                                width={150}
                                height={16}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Home
                        </Link>
                        <Link href="/about" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Jobs
                        </Link>
                        <Link href="/services" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Services
                        </Link>
                        <Link href="/contact" className="text-maingreen dark:text-white hover:text-black font-semibold">
                            Premium
                        </Link>

                        {/* Language Dropdown */}
                        <div className="relative">
                            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center text-gray-800 dark:text-white hover:text-blue-500">
                                <Link className='text-2xl font-bold' href='/'>
                                    <Image
                                        aria-hidden
                                        src="/images/kenya.png"
                                        alt="Globe icon"
                                        width={30}
                                        height={16}
                                    />
                                </Link>
                                <ChevronDown size={16} className="ml-1" />
                            </button>
                            {langOpen && (
                                <div className="absolute right-0 mt-4 w-32 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg">
                                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => changeLanguage("en")}>
                                        English
                                    </button>
                                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => changeLanguage("fr")}>
                                        French
                                    </button>
                                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => changeLanguage("es")}>
                                        Spanish
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* User Profile Dropdown */}
                        {session ? (
                            <div className="relative">
                                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
                                    <Image src={session?.user?.image ?? "/default-avatar.png"} alt="User Avatar" width={36} height={36} className="rounded-full border" />
                                    <ChevronDown size={16} className="text-gray-800 dark:text-white" />
                                </button>
                                {profileOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg">
                                        <Link href="/profile" className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                            <User size={16} className="mr-2" /> Profile
                                        </Link>
                                        <Link href="/settings" className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                            <Settings size={16} className="mr-2" /> Settings
                                        </Link>
                                        <button onClick={() => signOut()} className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-200 dark:hover:bg-gray-700 text-red-600 dark:text-red-400 py-4">
                                            <LogOut size={16} className="mr-2" /> Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/signin" className="px-8 py-2 bg-maingreen text-mainyellow rounded-3xl hover:bg-mainyellow hover:text-maingreen font-bold">
                                Get Started
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-2 shadow-md">
                    <Link href="/" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/about" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        About
                    </Link>
                    <Link href="/services" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Services
                    </Link>
                    <Link href="/contact" className="block text-gray-800 dark:text-white hover:text-blue-500">
                        Contact
                    </Link>

                    {/* Language Dropdown for Mobile */}
                    <div>
                        <button onClick={() => setLangOpen(!langOpen)} className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left">
                            Language <ChevronDown size={16} className="ml-1 inline" />
                        </button>
                        {langOpen && (
                            <div className="pl-4">
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("en")}>
                                    English
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("fr")}>
                                    French
                                </button>
                                <button className="block text-gray-800 dark:text-white hover:text-blue-500 w-full text-left" onClick={() => changeLanguage("es")}>
                                    Spanish
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sign In or Profile */}
                    {session ? (
                        <div className="mt-4 border-t pt-2">
                            <Link href="/profile" className="block text-gray-800 dark:text-white hover:text-blue-500">
                                Profile
                            </Link>
                            <Link href="/settings" className="block text-gray-800 dark:text-white hover:text-blue-500">
                                Settings
                            </Link>
                            <button onClick={() => signOut()} className="block w-full text-left text-red-600 dark:text-red-400 hover:text-red-700 mt-2">
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link href="/signin" className="block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2">
                            Sign In
                        </Link>
                    )}
                </div>
            )}
        </nav>
        </header>
    );
};

export default NavigationBar;
