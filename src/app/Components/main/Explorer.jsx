function Explorer() {
  return (
    <>
    <div className="mt-32 flex p-2 flex-col bg-[#1F2937] h-[600px] items-center">
        <div className="text-white text-4xl p-1 mt-36 font-semibold">Find the Perfect Electronics with CoolGuide
        </div>
        <div className="text-white p-3 text-xl">Browse our comprehensive guides, search for products, and<br/> connect with other users to make an informed decision.</div>
       <div>

        <input className="bg-black text-white border-white w-96 p-2  rounded  h-8" type="text" placeholder="   Search For Electronics.."/>
        <button className="h-8 ml-2 bg-white w-24 rounded-lg ">Search</button>
       </div>
       
       
        <div className="grid mt-3 grid-rows-2 grid-flow-col  gap-4 ">
        <button className="bg-white rounded-md  hover:bg-slate-300 w-36 h-11">Laptops</button>
        <button className="bg-white rounded-md hover:bg-slate-300  w-36">Smartphones</button>
        <button className="bg-white  rounded-md hover:bg-slate-300 w-36">TVs</button>
        <button className="bg-white rounded-md   hover:bg-slate-300 w-36">Headphones</button>
        <button className="bg-white  rounded-md  hover:bg-slate-300 w-36">Fridge</button>
        <button className="bg-white rounded-md hover:bg-slate-300 w-36">ACs</button>
        </div>



    </div>
    
    </>
  )
}

export default Explorer