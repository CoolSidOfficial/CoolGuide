"use client"
import Navbar from "../Components/main/Navbar"
import Footer from "../Components/Footer"
import { useRouter } from "next/navigation"

const categories = [
  { label: "Air Purifier",    icon: "🌬️", slug: "air-purifier" },
  { label: "Air Conditioner", icon: "❄️", slug: "air-conditioner" },
  { label: "Drones",          icon: "🚁", slug: "drones" },
  { label: "Fridge",          icon: "🧊", slug: "fridge" },
  { label: "Laptop",          icon: "💻", slug: "laptop" },
  { label: "Earphones",       icon: "🎧", slug: "earphones" },
  { label: "TV",              icon: "📺", slug: "tv-television" },
  { label: "Printers",        icon: "🖨️", slug: "printers" },
  { label: "Powerbanks",      icon: "🔋", slug: "powerbanks" },
]

export default function Glider() {
  const router = useRouter()

  const handleClick = (slug) => {
    router.push(`/category/${slug}`)
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08080e] px-6 md:px-12 pt-24 pb-20">

        {/* ── Ambient glows ── */}
        <div className="pointer-events-none fixed -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00e5b0]/8 blur-[120px]" />
        <div className="pointer-events-none fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7b5cfa]/8 blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* ── Header ── */}
          <div className="flex flex-col items-center text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00e5b0]/10 border border-[#00e5b0]/20 text-[#00e5b0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5b0] animate-pulse" />
              Smart Finder
            </span>

            <h1 className="text-white font-extrabold leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)]">
              Find the{" "}
              <span className="text-[#00e5b0]">Perfect Electronics</span>
              <br />for your needs
            </h1>

            <p className="text-[#6e6e82] mt-4 text-base font-light leading-relaxed max-w-lg">
              Pick a category below and we&apos;ll guide you step-by-step —
              budget, brand, specs — to your ideal product.
            </p>
          </div>

          {/* ── Step indicator ── */}
          <div className="flex items-center justify-center gap-2 mb-14 flex-wrap">
            {["Category", "Budget", "Brand", "Specs", "Result"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border transition-all
                  ${i === 0
                    ? "bg-[#00e5b0]/10 border-[#00e5b0]/40 text-[#00e5b0]"
                    : "bg-transparent border-white/7 text-[#6e6e82]"
                  }`}>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold
                    ${i === 0 ? "bg-[#00e5b0] text-[#08080e]" : "bg-white/10 text-[#6e6e82]"}`}>
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < 4 && <span className="text-white/10 text-xs">›</span>}
              </div>
            ))}
          </div>

          {/* ── Category grid ── */}
          <p className="text-center text-[#6e6e82] text-sm uppercase tracking-widest font-semibold mb-6">
            Choose a Category
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(({ label, icon, slug }) => (
              <button
                key={slug}
                onClick={() => handleClick(slug)}
                className="group bg-[#12121a] border border-white/7 rounded-2xl p-6 flex flex-col items-center gap-4 text-center hover:border-[#00e5b0]/35 hover:-translate-y-1 hover:bg-[#00e5b0]/5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#00e5b0]/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-[-3deg] transition-transform duration-200">
                  {icon}
                </div>

                {/* Label */}
                <span className="text-white font-semibold text-base tracking-tight group-hover:text-[#00e5b0] transition-colors duration-200">
                  {label}
                </span>

                {/* CTA */}
                <span className="text-[#6e6e82] text-xs font-medium flex items-center gap-1 group-hover:text-[#00e5b0] transition-colors duration-200">
                  Select <span className="text-sm">→</span>
                </span>
              </button>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}