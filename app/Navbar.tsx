'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname()
    console.log(currentPath)

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contacts', href: '/contacts' },
    ]

    return (
        <nav className='flex items-center justify-between p-4 border-b border-gray-200'>
            <h1>Navbar</h1>
            <ul className='flex items-center gap-4'>
                {links.map((link) =>
                    <Link key={link.href}
                        className={`text-gray-500 hover:text-gray-700 transition-colors duration-200 ${currentPath === link.href ? 'text-gray-900' : ''}`}
                        href={link.href}>{link.name}</Link>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
