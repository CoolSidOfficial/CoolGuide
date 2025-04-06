import Link from "next/link"
function Navbar() {
  return (
    <div className=" place-content-between	hidden  items-center	xl:flex    p-2 bg-black h-20 ">
        <div className="flex m-1 items-center">
          <img className="size-14 " src="favicon.ico" alt="Icon" />
          <span className="text-4xl text-white">CoolGuide</span>          
        </div>
        <ul className="flex  text-2xl	 space-x-4 text-white ">
            <li className=" hover:underline"><Link href="/">Home</Link></li>
            <li className=" hover:underline"><Link href="/glider">Glider</Link></li>
            <li className=" hover:underline"><Link href="/">About</Link></li>
            <li className=" hover:underline"> <Link href="/">Forums</Link></li>
            <li className=" hover:underline"> <Link href="/contact">Contact Us</Link></li>

        </ul>
          
    </div>
  )
}

export default Navbar