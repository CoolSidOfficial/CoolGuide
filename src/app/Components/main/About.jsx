function About() {
  const features = [
    {
      icon: '🤖',
      iconBg: 'bg-[#00e5b0]/10',
      title: 'Personalized Recommendations',
      desc: 'Our advanced AI search and filtering tools help you find the perfect product based on your specific needs and preferences.',
    },
    {
      icon: '📋',
      iconBg: 'bg-[#7b5cfa]/10',
      title: 'User-Friendly Guides',
      desc: 'Explore our comprehensive product guides, reviews, and comparisons — written by enthusiasts, no brand sponsorships, no fluff.',
    },
    {
      icon: '💬',
      iconBg: 'bg-yellow-400/10',
      title: 'Vibrant Community',
      desc: 'Connect with other users, ask questions, and share your experiences in our active forums before you spend a rupee.',
    },
  ];

  return (
    <section className="bg-[#08080e] py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00e5b0]/10 border border-[#00e5b0]/20 text-[#00e5b0] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            About CoolGuide
          </span>
          <h2 className="text-white font-extrabold leading-tight tracking-tight text-[clamp(2rem,4vw,3rem)] max-w-xl">
            Helping You Find the{' '}
            <span className="text-[#00e5b0]">Perfect Electronics</span>
          </h2>
          <p className="mt-5 text-[#6e6e82] text-lg font-light leading-relaxed max-w-2xl">
            CoolGuide is a comprehensive platform dedicated to helping users find the best
            electronics for their needs. Our team of experts curates product guides, reviews,
            and comparisons to ensure you make an informed decision.
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map(({ icon, iconBg, title, desc }) => (
            <div
              key={title}
              className="bg-[#12121a] border border-white/7 rounded-2xl p-8 flex flex-col gap-4 hover:border-[#00e5b0]/25 hover:-translate-y-1 transition-all duration-250"
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-[#6e6e82] text-sm leading-relaxed font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;