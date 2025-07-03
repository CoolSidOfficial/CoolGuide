import React from 'react'
import Navbar from '../Components/main/Navbar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'
function guide() {
  const Images=[
    {id:1,src:"",alt:"purifier-image"},
    {id:2,src:"",alt:"Ac-Image"},
    {id:3,src:"",alt:"Laptop-Image"},
    {id:4,src:"",alt:"Fridge-Image"},
    {id:5,src:"",alt:"Earphones-Image"},
    {id:6,src:"",alt:"Tv-Image"},
    {id:7,src:"",alt:"Fridge-Image"},
  ]
  return (


    <div className="min-h-screen flex flex-col">
    <Navbar/>
      <main className='bg-[#FFE3BE]  text-[#109BDB] flex-1 flex flex-col items-center m-1 '>
         <div className='text-4xl font-sans font-bold'>
          101 Buying guide from CoolGuide
          </div>
          <div className='grid grid-cols-3 gap-4 text-4xl m-4'>
           {Images.map((item)=>{
            <Link key={item.id} href="">

            <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={300}
            className="rounded-lg hover:scale-105 hover:opacity-90 transition duration-300 cursor-pointer object-cover w-full h-auto"
            />
            </Link>
           
           })

           }
          </div>
      </main>
      <Footer/>
    </div>

  )
}

export default guide
