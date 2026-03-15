import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer"

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-12">

          {/* Left Text Section */}
          <div className="text-white text-center xl:text-left flex-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-mono mb-4">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl xl:text-3xl font-mono mb-2">
              Let&apos;s get in Touch.
            </p>

            <p className="text-xl md:text-2xl xl:text-3xl font-mono mb-4">
              Or just reach out manually to
            </p>

            <a
              className="text-xl md:text-2xl xl:text-3xl underline break-all"
              href="mailto:siddhantjainmvm@gmail.com"
            >
              siddhantjainmvm@gmail.com
            </a>
          </div>

          {/* Form Section */}
          <form
            action="/"
            method="post"
            className="flex flex-col w-full max-w-xl"
          >
            <input
              type="text"
              name="full_name"
              placeholder="Enter your Name"
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
            />

            <textarea
              name="msg_box"
              placeholder="Please enter your message"
              rows="6"
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
            />

            <button
              type="submit"
              className="w-full md:w-64 bg-blue-600 text-white text-lg md:text-2xl p-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Submit Form →
            </button>
          </form>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact