'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
    const currentPath = usePathname()
    console.log(currentPath)

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contacts', href: '/contacts' },
        { name: 'Jobs', href: '/jobs' },
        { name: 'Services', href: '/services' },
        { name: 'Premium', href: '/premium' },
    ]

    const leftlinks = [
        { name: 'Get Started', href: '/signin' },
    ]

    return (
        <div className='border-b border-gray-200'>
            <nav className='container flex items-center justify-between p-4   w-full mx-auto z-10'>
                <Link className='text-2xl font-bold' href='/'>
                    <Image
                        aria-hidden
                        src="/images/mrkim-logo.svg"
                        alt="Globe icon"
                        width={150}
                        height={16}
                    />
                </Link>

                <div className="flex justify-between " >
                    <ul className='flex items-center gap-4' >
                        {links.map((link) =>
                            <Link key={link.href}
                                className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${currentPath === link.href ? 'text-gray-900' : ''}`}
                                href={link.href}>{link.name}</Link>
                        )}
                    </ul>
                    <ul className='flex items-center gap-4'>
                        {leftlinks.map((link) =>
                            <Link key={link.href}
                                className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${currentPath === link.href ? 'text-gray-900' : 'text-gray-500'}`}
                                href={link.href}>{link.name}</Link>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
