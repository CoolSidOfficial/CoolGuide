import Image from 'next/image';

function Featured() {
  return (
    <>
    <div className='flex m-28  text-white flex-col items-center'>
    <span className="text-lg bg-[#1F2937] w-52 text-center  font-semibold rounded-lg ">Featured Products</span>
    
    <div className='text-4xl p-4 font-bold'>Check Out Our Featured Electronics</div>
    <div className=' p-2 text-xl text-[#BDCBD8]'>Explore our hand-picked selection of the latest and greatest electronics, curated by our team of experts.</div>
    <div className="xl:flex p-3">
        <a  className="m-5 p-3 flex flex-col" href="https://amzn.to/3MDPA6V">
        <Image  className='border  border-l-zinc-950 border-'
        src="/products/headphone.jpg" // Local image
        alt="headphone image" 
        width={280}
        height={240}
      />
            <span className='text-white font-semibold p-1'>Boult Audio  Truly Wireless </span>
            <span className='text-[#BDCBD8] font-semibold  '>35H Playtime, Zen™ ENC Mic, <br>
            </br>45ms Low Latency, 13mm Bass Drivers </span>  
            <span className='text-white font-semibold'>₹799</span>
            </a>
        <a className='m-5 flex flex-col' href='https://amzn.to/4gmYzar'>
        <Image  className='border  border-l-zinc-950 border-'
        src="/products/tv.jpg" 
        alt="Tv image" 
        width={300}
        height={270}/>

            <span className="text-white font-semibold p-1">4k Oled  Android tv</span>
            <span className='text-[#BDCBD8] font-semibold '>Cinematic Home Entertainment </span>
            <span className='text-white font-semibold'>₹32,990</span>

        </a>
        <a className='m-5 flex flex-col href="https://" '>

        <Image  className='border  border-l-zinc-950 border-'
        src="/products/mi_tv.jpg" 
        alt="Example Image" 
        width={300} 
        height={250}/>
            <span className='text-white font-semibold p-1'>Flagship Smartphone</span>
            <span className='text-[#BDCBD8] font-semibold '>Powerfull Performance,Stunning Display</span>
            <span>₹9999</span>
            <div></div>
        </a>

    </div>

    </div>
    
    </>
  )
}

export default Featured