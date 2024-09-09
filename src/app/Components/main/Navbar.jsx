function navbar() {
  return (
    <div className="flex place-content-between	 items-center	    p-2 bg-black h-15 ">
        <div className="flex m-1 items-center">
          <img className="size-14 " src="favicon.ico" alt="Icon" />
          <span className="text-4xl text-white">CoolGuide</span>          
        </div>
        <ul className="flex  text-2xl	 space-x-4 text-white ">
            <li className=" hover:underline"><a href="http://">Home</a></li>
            <li className=" hover:underline"><a href="http://">Our Glider</a></li>
            <li className=" hover:underline"><a href="http://">About</a></li>
            <li className=" hover:underline"> <a href="http://">Forums</a></li>
            <li className=" hover:underline"> <a href="http://">Contact Us</a></li>

        </ul>
          
    </div>
  )
}

export default navbar