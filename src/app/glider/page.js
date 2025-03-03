import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer"
import Link from "next/link"
export default function Glider() {

  const category=[
 "Smartphones",
   "Laptops", 
   "Headphones",
    "Smart Home",
     "Gaming",
      "Cameras", 
      "Wearables",
       "Audio",
       "ACs"

      ]


  
   let data=[
    {"price":"20-30k"},
    {"price":"20-30k"},
    {"price":"30-40k"},

    {"price":"40-50k"},
    {"price":"50-60k"},
    {"price":"60-70k"},



   ]
  return (

    <>
    <Navbar/>
    <div className="  text-4xl text-white m-2" >
    <div className="text-center m-4 font-mono font-semibold">CoolGuide    </div>
    <div className="text-center">Find the perfect electronics for your needs
    </div>
      <div className="text-center text-4xl m-7">
      Choose an Electronics Category
      </div>
      <div className="grid grid-cols-3 gap-6 ">
      {
        category.map((each,index)=>( 

          <div   key={index} className ="px-10 m-10 h-32 text-white font-mono text-center py-2 bg-black  hover:border-2 rounded">
            <div>{ each}</div>
            <Link  href="" className="bg-black text-3xl" >Select  &gt;</Link>
               </div>
          
        ))
      }
   
   
      </div>
    </div>
    <Footer/>    
    </>
  )
}
