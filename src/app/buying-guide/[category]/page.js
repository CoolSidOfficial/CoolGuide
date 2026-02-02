import Navbar from "@/app/Components/main/Navbar"
import Footer from "@/app/Components/Footer"
import Link from "next/link"
import Image from 'next/image'





async function BuyingCategory({params}){
    const resolvedParams = await params;
    const slugee = resolvedParams.category.toLowerCase();    
    
    
    
    const contentMap = {
    "air-purifier": {
      title: "Best Air Purifiers 2026",
      description: "Complete buying guide for air purifiers",
      content: `
- HEPA filters
- CADR rating
- Coverage area
- Brand comparisons
      `,
    },
    "ac": {
      title: "Top AC Units 2026",
      description: "AC buying guide for this year",
      content: `
- Split vs Window AC
- Energy efficiency
- Cooling capacity
- Top brands
      `,
    },
    // ...add all 9 categories
  }
  
    const data = contentMap[slugee]
    if (!data) {
  return (
    <div className="max-w-3xl mx-auto p-6 text-red-500">
      Category not found.
    </div>
  )
}

  return(
      <div className="flex flex-col min-h-screen bg-[red] text-white">
           <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-400 mb-4">{data.description}</p>
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: data.content.replace(/\n/g, "<br/>") }}
        />
      </div>
      <Footer />
    </div> 
    )


}
export default  BuyingCategory;
