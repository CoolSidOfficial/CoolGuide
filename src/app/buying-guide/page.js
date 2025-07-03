import React from 'react'
import Navbar from '../Components/main/Navbar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'
function guide() {
  const Images=[
    {id:1,src:"/buying-guide/Air-Purifier.png",alt:"purifier-image"},
    {id:2,src:"/buying-guide/ac.png",alt:"Ac-Image"},
    {id:3,src:"/buying-guide/laptop.png",alt:"Laptop-Image"},
    {id:4,src:"/buying-guide/fridge.png",alt:"Fridge-Image"},
    {id:5,src:"/buying-guide/Earphones.png",alt:"Earphones-Image"},
    {id:6,src:"/buying-guide/tv.png",alt:"Tv-Image"},
    {id:7,src:"/buying-guide/printers.png",alt:"Printers-Image"},
    {id:8,src:"/buying-guide/drones.png",alt:"Drones-Image"},
    {id:9,src:"/buying-guide/powerbanks.png",alt:"Powerbank-Image"},


  ]
  return (


    <div className="min-h-screen flex flex-col">
    <Navbar/>
      <main className='bg-[#FFE3BE]  text-[#109BDB] flex-1 flex flex-col items-center m-1 '>
         <div className='text-6xl font-extrabold font-serif p-1'>
           Buying Guide 
          </div>
          <div className='grid grid-cols-3 gap-4 text-4xl m-4'>
           {Images.map((item)=>(
            <Link key={item.id} href="">

            <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={450}
            className="rounded-lg hover:scale-105 hover:opacity-90 transition duration-300 cursor-pointer object-cover "
            />
            </Link>
           
           ))

           }
          </div>
      </main>
      <Footer/>
    </div>

  )
}

export default guide
