"use client"
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <section className="relative min-h-screen bg-[#08080e] overflow-hidden flex items-center">

      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#00e5b0]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7b5cfa]/8 blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text content ── */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00e5b0]/10 border border-[#00e5b0]/25 text-[#00e5b0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5b0] animate-pulse" />
            AI-Powered Recommendations
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-white leading-[1.06] tracking-tight text-[clamp(2.4rem,5vw,3.8rem)]">
            Find the{' '}
            <span className="text-[#00e5b0]">Perfect</span>
            <br />
            Electronics, Fast.
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-[#6e6e82] text-lg font-light leading-relaxed max-w-[440px]">
            CoolGuide cuts through the noise. Expert-curated reviews, real
            comparisons, and a community that&apos;s been there — so you buy
            right the first time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-9 justify-center xl:justify-start">
            <Link
              href="/glider"
              className="inline-flex items-center gap-2 bg-[#00e5b0] hover:opacity-85 text-[#08080e] font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-150 hover:-translate-y-0.5 shadow-[0_0_28px_rgba(0,229,176,0.3)]"
            >
              Browse Glider
              <span className="text-lg">→</span>
            </Link>
            <Link
              href="/buying-guide"
              className="inline-flex items-center gap-2 bg-transparent border border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-medium text-base px-7 py-3.5 rounded-xl transition-all duration-150"
            >
              Explore Guides
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-12 justify-center xl:justify-start">
            {[
              { num: '200+', label: 'Products Reviewed' },
              { num: '6+',   label: 'Categories' },
              { num: '5k+',  label: 'Community Members' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-extrabold text-white text-2xl tracking-tight font-[Syne,sans-serif]">
                  {num}
                </p>
                <p className="text-[#6e6e82] text-xs mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Image with overlay cards ── */}
        <div className="relative hidden xl:block">

          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/7 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            <Image
              src="/electronics_home.jpg"
              alt="Electronics Guide"
              width={640}
              height={440}
              className="object-cover w-full h-[420px]"
              priority
            />
            {/* dark gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080e]/60 via-transparent to-transparent" />
          </div>

          {/* Floating card — top left */}
          <div className="absolute -top-5 -left-10 bg-[#12121a] border border-white/8 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm animate-[float_5s_ease-in-out_infinite]">
            <p className="text-[10px] uppercase tracking-widest text-[#6e6e82] mb-1">⭐ Editor&apos;s Pick</p>
            <p className="font-bold text-white text-sm">Sony WH-1000XM5</p>
            <p className="text-[#00e5b0] font-semibold text-base mt-1">₹24,990</p>
            <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[82%] bg-gradient-to-r from-[#00e5b0] to-[#7b5cfa] rounded-full" />
            </div>
          </div>

          {/* Floating card — bottom right */}
          <div className="absolute -bottom-4 -right-6 bg-[#12121a] border border-white/8 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-sm animate-[float2_6s_ease-in-out_infinite]">
            <p className="text-[10px] uppercase tracking-widest text-[#6e6e82] mb-1">🔥 Trending</p>
            <p className="font-bold text-white text-sm">4K OLED TV</p>
            <div className="flex items-center justify-between mt-1 gap-6">
              <p className="text-[#00e5b0] font-semibold text-base">₹32,990</p>
              <span className="text-yellow-400 text-xs">★★★★★</span>
            </div>
          </div>
        </div>

      </div>

      {/* Keyframe styles injected inline for the floating cards */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-8px) rotate(-1deg); }
        }
      `}</style>

    </section>
  );
}

export default Header;