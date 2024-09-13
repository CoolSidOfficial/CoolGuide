
function Footer() {
  return (
    <>
    <div className="bg-[#1F2937] flex  place-content-between p-5 text-2xl text-white    ">
        <ul className="flex   space-x-4">
        <div className="flex  ">
          <img className="size-7 " src="favicon.ico" alt="Icon" />
          <span className="text-2xl text-white">CoolGuide</span>          
        </div>
            <a href="">About</a>
            <a href="">Guide</a>
            <a href="">Forums</a>

        </ul>
        <div>© 2024 CoolGuide. All rights reserved. </div>
    </div>


    </>
  )
}

export default Footer