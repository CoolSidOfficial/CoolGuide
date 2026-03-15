"use client"

import { useState } from "react"
import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer"

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("https://coolguide.20.193.152.44.nip.io/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      })

      const data = await res.json()
      console.log(data)

      alert("Message sent successfully!")

      setForm({
        name: "",
        email: "",
        message: ""
      })

    } catch (error) {
      console.error(error)
      alert("Failed to send message")
    }
  }

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
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
              required
            />

            <textarea
              name="message"
              placeholder="Please enter your message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="w-full text-white bg-[#1e2d5a] rounded-2xl p-4 text-lg mb-6"
              required
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