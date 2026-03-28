import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Explore:    [
    { label: "Buying Guides", href: "/buying-guide" },
    { label: "Glider Tool",   href: "/glider" },
    { label: "Forums",        href: "https://forums-self.vercel.app/" },
    { label: "Trending",      href: "/buying-guide" },
  ],
  Categories: [
    { label: "Laptops",         href: "/buying-guide/laptop" },
    { label: "TVs",             href: "/buying-guide/tv" },
    { label: "Headphones",      href: "/buying-guide/earphones" },
    { label: "ACs & Appliances",href: "/buying-guide/ac" },
  ],
  Company: [
    { label: "About Us",       href: "/about" },
    { label: "Contact",        href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

function Footer() {
  return (
    <footer className="bg-[#0d0d14] border-t border-white/7 px-6 md:px-12 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 pb-10 border-b border-white/7">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00e5b0] animate-pulse" />
              <span className="text-white font-extrabold text-lg tracking-tight">
                Cool<span className="text-[#00e5b0]">Guide</span>
              </span>
            </Link>
            <p className="text-[#6e6e82] text-sm leading-relaxed font-light max-w-[240px]">
              Your trusted companion for making smarter electronics decisions.
              Expert guides, honest reviews, real community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#6e6e82] text-xs font-semibold uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[#6e6e82] hover:text-white text-sm transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-[#6e6e82]">
          <span>© 2026 CoolGuide. All rights reserved.</span>
          <span>Made with ♥ for smart shoppers</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;