import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer"

function Contact() {
  return (
<>
    <Navbar/>
    <div className=' h-max'>
    <div  className='xl:flex text-center xl:gap-72 xl:m-32  mx-10 w-64'>
      <div className='text-white' >
        <div className='xl:text-6xl font-mono p-4 ' >Contact US</div>
        <div className='xl:text-4xl font-mono p-2'>Let &apos;s get in Touch.</div>
        <div className='xl:text-4xl font-mono p-2'>or just read out manually to </div>
        <a  className="xl:text-4xl p-2 underline" href="mailto:coolsoft@protonmail.com">coolsoft@protonmail.com</a>
      </div>
      <form action='/' method='post' >
        <input type="text" className='xl:w-[550px] w-72 text-white  xl:h-11 text-xl h-4   bg-[#1e2d5a] rounded-3xl p-4 m-8' placeholder='Enter your Name' name="full_name" />
        <input type="email"  className=' h-11  w-72 xl:w-[550px] rounded-3xl  text-white  bg-[#1e2d5a] p-4 text-xl m-8' name="email " placeholder='Enter your Email' />
        <textarea type="text"  className=' w-72 h-56 p-3 rounded-3xl xl:w-[550px] bg-[#1e2d5a] text-xl text-white m-6 ml-9 xl:ml-0 '    placeholder="Please enter your message" name="msg_box" />
        <button  className="xl:w-72 xl:text-3xl p-1 bg-blue-600 rounded-xl mt-5 font-medium ml-16 xl:ml-0 " type='submit'>Submit Form →</button>
        
        


      </form>
    </div>
    </div>
    <Footer/>
</>
  )
}

export default Contact