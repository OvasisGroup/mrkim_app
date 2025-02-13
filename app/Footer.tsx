import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-maingreen text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
