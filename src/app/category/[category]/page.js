"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/app/Components/main/Navbar";
import Footer from "@/app/Components/Footer";

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { category } = params;
  
  // useEffect(() => {
  //   if (!categoryInfo) {
  //     router.push("/404");
  //   }
  // }, [categoryInfo]);

  const filter_options={

    "air-purifier":{
      "options":{
       "By-Size" : ["Small Room ","Medium Room","Large Room","Car/P ortable"],
       "By-Concern":["allergies","pet","pollution","smell","all of the above"],
       "Budget-Range":["1k-4k","4k-8k","8k-16k","16k Above"],
       "Noise-Level":["Silent","Moderate","No-Preferance"],
       "Noise-Level":["Silent","moderate","No-Preferance"],
       "Machine-Size":["Compact","Tower","No-Preferance"],
       "Machine-Brand":["Philips","Dyson","Sharp"],
       "Warranty":["1year","2 year","5 year","Don't care"]
       
      }
        
       
    },


  }
const selected_category=category
const[step,setStep]=useState(0)
const [selected, setSelected] = useState({});

const filter_key=Object.keys(filter_options[selected_category]["options"])
const current_filter_key=filter_key[step]


function handleclick(val){
   setSelected(prev => ({
    ...prev,
    [current_filter_key]: val
  }));
   setStep(step+1)
}
console.log(selected)
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Add flex-grow here to push footer down */}
      <main className="flex-grow">
           <div className="text-white text-4xl mx-4 m-10  xl:m-14  text-center font-mono">
            Choose the best {category} according to your needs !!!
           </div>

{selected_category &&(
  <div className="font-mono text-white text-3xl ">
    <div className=" text-white text-center">On the basis of {current_filter_key}</div>
    <div className="grid grid-cols-2 gap-6 m-6 mx-10 text-5xl ">

    {filter_options[category]["options"]?.[current_filter_key]?.map((value)=>(<button   key={value} onClick={()=>handleclick({value})} className="bg-black h-auto w-a font-serif p-4 cursor-pointer hover:bg-slate-950"> {value} </button>))

}
</div>
    
  </div>
)
}
           


      </main>

      <Footer />
    </div>
  );
}
