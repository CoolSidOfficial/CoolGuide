import React from "react";
import Link from "next/link";

const categories = [
  { label: "Laptops",      icon: "💻", href: "/buying-guide/laptop" },
  { label: "Air Purifier", icon: "🌬️", href: "/buying-guide/air-purifier" },
  { label: "TVs",          icon: "📺", href: "/buying-guide/tv" },
  { label: "Headphones",   icon: "🎧", href: "/buying-guide/earphones" },
  { label: "Fridge",       icon: "🧊", href: "/buying-guide/fridge" },
  { label: "ACs",          icon: "❄️", href: "/buying-guide/ac" },
];

function Explorer() {
  return (
    <section className="bg-[#0d0d14] border-y border-white/7 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* ── Eyebrow ── */}
        <span className="inline-flex items-center gap-2 bg-[#00e5b0]/10 border border-[#00e5b0]/20 text-[#00e5b0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
          Quick Search
        </span>

        {/* ── Heading ── */}
        <h2 className="text-white font-extrabold leading-tight tracking-tight text-[clamp(1.8rem,3.5vw,2.8rem)]">
          What are you{" "}
          <span className="text-[#00e5b0]">looking for?</span>
        </h2>

        {/* ── Subtext ── */}
        <p className="text-[#6e6e82] mt-4 text-base font-light leading-relaxed max-w-xl">
          Search across hundreds of curated electronics guides and reviews,
          or jump straight into a category below.
        </p>

        {/* ── Search bar ── */}
        <div className="flex w-full max-w-xl mt-8 bg-[#12121a] border border-white/7 rounded-xl overflow-hidden focus-within:border-[#00e5b0]/40 focus-within:shadow-[0_0_0_3px_rgba(0,229,176,0.07)] transition-all duration-200">
          <span className="flex items-center pl-4 text-[#6e6e82] text-base select-none">
            🔍
          </span>
          <input
            className="flex-1 bg-transparent text-white placeholder:text-[#6e6e82] text-sm px-3 py-4 outline-none"
            type="text"
            placeholder="e.g. best budget laptop under ₹50,000…"
          />
          <button className="m-1.5 px-5 py-2.5 bg-[#00e5b0] hover:opacity-85 text-[#08080e] font-semibold text-sm rounded-lg transition-opacity">
            Search
          </button>
        </div>

        {/* ── Category chips ── */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map(({ label, icon, href }) => (
            <Link key={label} href={href}>
              <span className="inline-flex items-center gap-2 bg-[#12121a] border border-white/7 hover:border-[#00e5b0]/35 hover:text-[#00e5b0] hover:bg-[#00e5b0]/5 text-[#6e6e82] text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200">
                <span>{icon}</span>
                {label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Explorer;