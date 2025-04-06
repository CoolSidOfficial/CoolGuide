import Image from 'next/image';


function Header() {
  return (
<>
<div className=" xl:flex p-2 mt-16  text-white  ">
    <div className="p-[25px] m-3 text-5xl  font-extrabold xl:text-left text-center	">Find The Best Electronics &nbsp; with CoolGuide</div>
  
<div className="flex flex-col items-center xl:items-start px-4">
  <span className="xl:text-2xl text-3xl p-[25px] mt-1 xl:text-left text-center">
    CoolGuide helps you find the perfect electronics for your needs. <br />
    Browse our guide, search for products, and connect with other users to make an informed decision.
  </span>

  <a
    href="/glider"
    className="bg-white w-52 h-14 text-xl text-black text-center hover:bg-zinc-400 py-3 mt-2 xl:ml-5"
  >
    Choose Now
  </a>
</div>
</div>
<div className='m-20 flex justify-center'>

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