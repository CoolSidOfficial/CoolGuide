import Image from 'next/image';


function Header() {
  return (
<>
<div className=" flex p-2 mt-16  text-white   ">
    <div className="p-[25px] m-3 text-5xl font-extrabold	">Find The Best Electronics &nbsp; with CoolGuide</div>
    <div>
    <div className="flex flex-col">

   <span className="text-2xl p-[25px] mt-1"> CoolGuide helps you find the perfect electronics for your needs. <br/>Browse our guide, search for products, and connect with other users to make an informed decision.         
    </span>
    <button className="bg-white w-52 h-14 text-xl hover:bg-zinc-400 text-black ml-5 ">Choose Now </button>
    </div>

</div>
</div>
<div className='m-20'>

<Image
        src="/electronics_home.jpg" // Path to your image (can be in the public folder)
        alt="Electronics Guide Image "
        width={1400} // Set the width of the image
        height={600} // Set the height of the image
        />
        </div>

</>  
)
}

export default Header