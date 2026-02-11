"use client";
import { useRouter } from "next/navigation";
import { use } from "react";

import { useEffect, useState } from "react";
import Navbar from "@/app/Components/main/Navbar";
import Footer from "@/app/Components/Footer";

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { category } = use(params);
  
  // useEffect(() => {
  //   if (!categoryInfo) {
  //     router.push("/404");
  //   }
  // }, [categoryInfo]);

 const filter_options = {
  "air-purifier": {
    options: {
      "By-Size": ["Small Room", "Medium Room", "Large Room", "Car/Portable"],
      "By-Concern": ["Allergies", "Pet", "Pollution", "Smell", "All of the above"],
      "Budget-Range": ["1k-4k", "4k-8k", "8k-16k", "16k Above"],
      "Noise-Level": ["Silent", "Moderate", "No Preference"],
      "Machine-Size": ["Compact", "Tower", "No Preference"],
      "Machine-Brand": ["Philips", "Dyson", "Sharp"],
      "Warranty": ["1 Year", "2 Year", "5 Year", "Don't care"]
    }
  },

  "fridge": {
    options: {
      "Capacity": ["Single Door", "Double Door", "Side-by-Side", "Mini Fridge"],
      "Family Size": ["1-2 People", "3-4 People", "5+ People"],
      "Energy Rating": ["3 Star", "4 Star", "5 Star"],
      "Freezer Type": ["Top Freezer", "Bottom Freezer", "Convertible", "No Preference"],
      "Budget-Range": ["10k-20k", "20k-30k", "30k-50k", "50k+"],
      "Machine-Brand": ["Samsung", "LG", "Whirlpool", "Godrej"],
      "Warranty": ["1 Year", "2 Years", "5 Years", "Don't care"]
    }
  },

  "laptop": {
    options: {
      "Usage Type": ["Student", "Professional", "Gaming", "Content Creation"],
      "Performance": ["Basic", "Mid-Range", "High-End"],
      "Battery Life": ["<5 hrs", "5-8 hrs", ">8 hrs"],
      "Screen Size": ["13\"", "15\"", "17\"", "No Preference"],
      "Budget-Range": ["30k-50k", "50k-80k", "80k+"],
      "Machine-Brand": ["Apple", "Dell", "HP", "Asus", "Lenovo"],
      "Warranty": ["1 Year", "2 Years", "Don't care"]
    }
  },

  "earphones": {
    options: {
      "Type": ["Wired", "Wireless", "True Wireless"],
      "Use Case": ["Calling", "Workout", "Gaming", "Music", "All-Purpose"],
      "Noise Cancellation": ["Yes", "No", "Doesn't Matter"],
      "Battery Life": ["<6 hrs", "6-12 hrs", "12+ hrs"],
      "Budget-Range": ["1k-2k", "2k-5k", "5k+"],
      "Machine-Brand": ["Sony", "Apple", "boAt", "JBL", "Nothing"],
      "Warranty": ["6 Months", "1 Year", "Don't care"]
    }
  },

  "tv-(television)": {
    options: {
      "Screen Size": ["32\"", "43\"", "55\"", "65\"+"],
      "Display Type": ["LED", "OLED", "QLED", "4K UHD"],
      "Smart Features": ["Smart TV", "Android TV", "Non-Smart"],
      "Use Case": ["Living Room", "Bedroom", "Gaming", "All-Purpose"],
      "Budget-Range": ["10k-20k", "20k-40k", "40k+"],
      "Machine-Brand": ["Samsung", "LG", "Sony", "Mi", "OnePlus"],
      "Warranty": ["1 Year", "2 Years", "Don't care"]
    }
  },

  "printers": {
    options: {
      "Type": ["Inkjet", "Laser", "Thermal", "Dot Matrix"],
      "Functionality": ["Print Only", "All-in-One (Print, Scan, Copy)"],
      "Color": ["Color", "Black & White"],
      "Use Case": ["Home", "Office", "Photo Printing"],
      "Budget-Range": ["2k-5k", "5k-10k", "10k+"],
      "Machine-Brand": ["HP", "Canon", "Epson", "Brother"],
      "Warranty": ["1 Year", "2 Years", "Don't care"]
    }
  },

  "drones": {
    options: {
      "Use Case": ["Photography", "Videography", "Recreational", "Industrial"],
      "Camera Quality": ["720p", "1080p", "4K", "No Camera"],
      "Flight Time": ["<10 mins", "10-20 mins", "20+ mins"],
      "Range": ["<500m", "500m-1km", "1km+"],
      "Budget-Range": ["5k-15k", "15k-40k", "40k+"],
      "Machine-Brand": ["DJI", "Parrot", "Ryze", "Autel"],
      "Warranty": ["1 Year", "2 Years", "Don't care"]
    }
  },

  "air-conditioner": {
    options: {
      "Room Size": ["<120 sq ft", "120-180 sq ft", "180-300 sq ft", "300+ sq ft"],
      "Type": ["Window", "Split", "Portable", "Inverter AC"],
      "Energy Rating": ["3 Star", "4 Star", "5 Star"],
      "Smart Features": ["WiFi Control", "Voice Control", "No Smart Features"],
      "Budget-Range": ["20k-30k", "30k-50k", "50k+"],
      "Machine-Brand": ["LG", "Samsung", "Voltas", "Daikin", "Panasonic"],
      "Warranty": ["1 Year", "2 Years", "5 Years", "Don't care"]
    }
  },

  "powerbanks": {
    options: {
      "Capacity": ["<5000 mAh", "5000-10000 mAh", "10000-20000 mAh", "20000+ mAh"],
      "Ports": ["1", "2", "3+"],
      "Fast Charging": ["Yes", "No", "Doesn't Matter"],
      "Type": ["Standard", "Solar", "Wireless"],
      "Budget-Range": ["500-1000", "1000-2000", "2000+"],
      "Machine-Brand": ["Anker", "Xiaomi", "Ambrane", "Realme"],
      "Warranty": ["6 Months", "1 Year", "Don't care"]
    }
  }
};

const selected_category=category
const[step,setStep]=useState(0)
const [selected, setSelected] = useState({});
if (!filter_options[selected_category]) {
  return <div>Invalid or missing category: {selected_category}</div>;
}
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

    {filter_options[category]["options"]?.[current_filter_key]?.map((value)=>(<button   key={value} onClick={()=>handleclick(value)} className="bg-black h-auto w-a font-serif p-4 cursor-pointer hover:bg-slate-500 hover:border-gray-50"> {value} </button>))

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
