"use client"; 
import { useState } from "react"
import Link from "next/link"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className=" place-content-between	hidden  items-center	xl:flex    p-2 bg-black h-20 ">
        <div className="flex m-1 items-center">
          <img className="size-14 " src="favicon.ico" alt="Icon" />
          <span className="text-4xl text-white">CoolGuide</span>          
        </div>
        <ul className="flex  text-2xl	 space-x-4 text-white ">
            <li className=" hover:underline"><Link href="/">Home</Link></li>
            <li className=" hover:underline"><Link href="/glider">Glider</Link></li>
            <li className=" hover:underline"><Link href="/about">About</Link></li>
            <li className=" hover:underline"> <Link href="/buying-guide">Guide</Link></li>
            <li className=" hover:underline"> <Link href="/contact">Contact Us</Link></li>

        </ul>
          
    </div>


    <nav className="bg-gray-800 text-white p-4 xl:hidden relative">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">CoolGuide</h1>

        {/* Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="mt-3 bg-gray-700 rounded-md flex flex-col items-center py-4 space-y-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/glider" className="hover:text-gray-300">Glider</a>
          <a href="/guide" className="hover:text-gray-300">About</a>
          <a href="/buying-guide" className="hover:text-gray-300">Guide</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>


        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar