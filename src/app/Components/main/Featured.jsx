import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    src: "/products/headphone.jpg",
    alt: "Boult Audio Headphones",
    category: "Headphones",
    name: "Boult Audio Truly Wireless",
    desc: "35H Playtime, Zen™ ENC Mic, 45ms Low Latency, 13mm Bass Drivers",
    price: "₹799",
    badge: "Top Pick",
    rating: "4.4",
    href: "https://amzn.to/3MDPA6V",
    cta: "View on Amazon",
  },
  {
    src: "/products/tv.jpg",
    alt: "4K OLED Android TV",
    category: "Television",
    name: "4K OLED Android TV",
    desc: "Cinematic Home Entertainment with Dolby Vision & HDR10+",
    price: "₹32,990",
    badge: "Best Value",
    rating: "4.7",
    href: "https://amzn.to/4gmYzar",
    cta: "View on Amazon",
  },
  {
    src: "/products/mi_tv.jpg",
    alt: "Flagship Smartphone",
    category: "Smartphone",
    name: "Flagship Smartphone",
    desc: "Powerful Performance, Stunning Display",
    price: "₹9,999",
    badge: "New",
    rating: "4.3",
    href: null,
    cta: "View Guide",
  },
];

function Featured() {
  return (
    <section className="bg-[#08080e] py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#00e5b0]/10 border border-[#00e5b0]/20 text-[#00e5b0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Featured Products
          </span>
          <h2 className="text-white font-extrabold leading-tight tracking-tight text-[clamp(1.8rem,3.5vw,2.8rem)]">
            Hand-picked by our{' '}
            <span className="text-[#00e5b0]">experts</span>
          </h2>
          <p className="text-[#6e6e82] mt-4 text-base font-light leading-relaxed max-w-xl">
            Explore our curated selection of the latest and greatest electronics,
            chosen by our team for quality, value, and performance.
          </p>
        </div>

        {/* ── Product cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(({ src, alt, category, name, desc, price, badge, rating, href, cta }) => (
            <div
              key={name}
              className="bg-[#12121a] border border-white/7 rounded-2xl overflow-hidden flex flex-col hover:border-[#00e5b0]/25 hover:-translate-y-1 transition-all duration-250"
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-[#16161f] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a]/70 via-transparent to-transparent" />
                {/* badge */}
                <span className="absolute top-3 left-3 bg-[#00e5b0] text-[#08080e] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10">
                  {badge}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-2">
                <span className="text-[#6e6e82] text-[10px] uppercase tracking-widest font-medium">
                  {category}
                </span>
                <h3 className="text-white font-bold text-base leading-snug tracking-tight">
                  {name}
                </h3>
                <p className="text-[#6e6e82] text-sm font-light leading-relaxed flex-1">
                  {desc}
                </p>

                {/* Price + rating */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#00e5b0] font-semibold text-xl">{price}</span>
                  <span className="text-[#6e6e82] text-xs flex items-center gap-1">
                    <span className="text-yellow-400">★</span> {rating}
                  </span>
                </div>

                {/* CTA */}
                {href ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full text-center text-sm font-medium text-white border border-white/10 hover:bg-[#00e5b0] hover:border-[#00e5b0] hover:text-[#08080e] py-2.5 rounded-lg transition-all duration-200"
                  >
                    {cta} →
                  </Link>
                ) : (
                  <button className="mt-3 w-full text-center text-sm font-medium text-white border border-white/10 hover:bg-[#00e5b0] hover:border-[#00e5b0] hover:text-[#08080e] py-2.5 rounded-lg transition-all duration-200">
                    {cta} →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Featured;