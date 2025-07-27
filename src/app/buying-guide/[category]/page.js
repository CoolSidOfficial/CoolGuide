import Navbar from "@/app/Components/main/Navbar"
import Footer from "@/app/Components/Footer"
import Link from "next/link"
import Image from 'next/image'





function buyingCategory({params}){
    const slug=params
    return(
        <div className="flex flex-col min-h-screen bg-[#121212]">
            <Navbar/>
         

            <Footer/>
        </div>
    )


}
export default buyingCategory
