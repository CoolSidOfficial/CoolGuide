import Image from "next/image"
function Footer() {
  return (
    <>
    <div className="bg-[#1F2937] flex place-content-between p-5 text-2xl text-white    ">
        <ul className="flex   space-x-4">
        <div className="flex  ">
          <Image width={40} height={20} src="/favicon.ico" rel="icon" />
          <span className="text-2xl p-1 text-white">CoolGuide</span>          
        </div>
            <a clasname="p-1" href="">About</a>
            <a clasname="p-1" href="">Guide</a>
            <a clasname="p-1" href="">Forums</a>

        </ul>
        <div>© 2024 CoolGuide. All rights reserved. </div>
    </div>


    </>
  )
}

export default Footer