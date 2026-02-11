"use client";
import { useRouter } from "next/navigation";
import { use } from "react";

import { useEffect, useState } from "react";
import Navbar from "@/app/Components/main/Navbar";
import Footer from "@/app/Components/Footer";
import filterOptions from "./filterOptions";
export default function CategoryPage({ params }) {
  const router = useRouter();
  const { category } = use(params);


 
const selected_category=category
const[step,setStep]=useState(0)
const [selected, setSelected] = useState({});
if (!filterOptions[selected_category]) {
  return <div>Invalid or missing category: {selected_category}</div>;
}
const filter_key=Object.keys(filterOptions[selected_category]["options"])
const current_filter_key=filter_key[step]



function handleclick(val){
   setSelected(prev => ({
    ...prev,
    [current_filter_key]: val
  }));
   setStep(step+1)
}
console.log(selected)


  
//   useEffect(() => {
//   if (step >= filter_key.length) {
//     sendData();
//   }
// }, [step]);

// async function sendData() {
//   try {
//     const res = await fetch("/api/recommend", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         category: selected_category,
//         filters: selected,
//       }),
//     });

//     const data = await res.json();
//     setResults(data.recommendations);

//   } catch (err) {
//     console.error("Error sending data:", err);
//   }
// }





if (step >= filter_key.length) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow text-white text-center mt-20">
        <h2 className="text-4xl font-mono">
           Filtering Complete! 
        </h2>

        <div className="mt-10 text-xl">
          <p>Bring back the best options  for you</p>
         
        </div>
      </main>
      <Footer />
    </div>
  );
}


  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Add flex-grow here to push footer down */}
      <main className="flex-grow">
           <div className="text-white text-4xl mx-4 m-10  xl:m-14  text-center font-mono">
            Choose the best {category} according to your needs !!
           </div>

{selected_category &&(
  <div className="font-mono text-white text-3xl ">
    <div className=" text-white text-center">On the basis of {current_filter_key}</div>
    <div className="grid grid-cols-2 gap-6 m-6 mx-10 text-5xl ">

    {filterOptions[category]["options"]?.[current_filter_key]?.map((value)=>(<button   key={value} onClick={()=>handleclick(value)} className="bg-black h-auto w-a font-serif p-4 cursor-pointer hover:bg-slate-500 hover:border-gray-50"> {value} </button>))

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
