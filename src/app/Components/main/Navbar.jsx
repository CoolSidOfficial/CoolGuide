function navbar() {
  return (
    <div className="flex m-1 bg-black h-20 ">
        <div className="m-1">
          <img className="size-10 " src="favicon.ico" alt="Icon" />
          <h1>CoolGuide</h1>
        </div>
        <ul className="flex gap-x-6 -end	 text-white">
            <li><a href="http://">Home</a></li>
            <li><a href="http://">Our Glider</a></li>
            <li><a href="http://">About</a></li>
            <li> <a href="http://">Forums</a></li>
            <li> <a href="http://">Contact Us</a></li>

        </ul>
          
    </div>
  )
}

export default navbar