

function About() {
  return (
    <>
    <div className="flex text-white m-2	items-center text-center flex-col ">
      <span className="text-lg bg-[#1F2937] w-52 text-center  font-semibold rounded-lg ">About CoolGuide</span>
      <span className="font-extrabold text-5xl m-2	">Helping You Find the Perfect Electronics</span>      
      <p className="text-xl  p-2 m-2">CoolGuide is a comprehensive website dedicated to helping users find the best electronics for their needs.<br/> Our team of experts curates product guides, reviews, and comparisons to ensure you make an informed decision.</p>      

    </div>
    <div className="xl:flex place-content-evenly text-white text-center">
        <div className="flex flex-col xl:w-72">
            <span className="p-1 font-semibold text-xl">Personalized Recommendations
            </span> 
            <span className="p-1 text-xl">Our advanced AI  search and filtering tools help you find the perfect product based on your specific needs and preferences.</span>
        </div>
        <div className=" flex flex-col xl:w-72 ">
        <span  className="p-1 font-semibold text-xl ">User-Friendly Guides
        </span>
        <span className="p-2 text-xl">Explore our comprehensive product guides, reviews, and comparisons to make an informed decision.

</span>

   </div>
        <div className=" flex flex-col  xl:w-72">
        <span className="font-semibold text-xl p-1">
        Vibrant Community </span>
<span className="text-xl p-2">Connect with other users, ask questions, and share your experiences in our active forums.
</span>
        </div>

    </div>
    </>
  )
}

export default About