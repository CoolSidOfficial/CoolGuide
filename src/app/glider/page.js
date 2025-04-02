"use client"
import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer" 
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"; 






export default function Glider() {
  const router=useRouter()
const [button_text,set_button_text]=useState([
  "Air Purifier",
  "Air Conditioner", 
  "Drones",
  "Fridge",
  "Laptop",
  "Earphones",
  "TV (Television)",
  "Printers",
  "Powerbanks",
  


 ])
const handle_Click=(category)=>{
  // set_button_text(["20-30k", "20-30k", "30-40k", "40-50k", "50-60k", "60-70k"] )
  const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
  router.push(`/category/${formattedCategory}`); 


}



const steps = ["Budget", "Brand", "Specifications", "Review"];
  

  return (

    <>
    <Navbar/>
    <div className="  text-4xl text-white m-2" >
    {/* <div className="text-center m-4 font-mono font-semibold">CoolGuide    </div> */}
    <div className="text-center">Find the perfect electronics for your needs
    </div>
    
    <div className="flex items-center justify-between mb-6 relative">
 

</div>

      <div className="text-center text-4xl m-7">
      Choose an Electronics Category
      </div>
      <div className="grid grid-cols-3 gap-6 ">
      {
        button_text.map((each,index)=>( 

          <div key={index} className ="px-10 m-10 h-32 text-white font-mono text-center py-2 bg-black  hover:border-2 rounded">
            <div>{each}</div>
            <button onClick={handle_Click(each)}   className="bg-black text-2xl" >Select&gt;</button>
               </div>
          
        ))
      }
   
   
      </div>
    </div>
    <Footer/>    
    </>
  )
}
