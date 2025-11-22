export default function Technology() {
  const features = [
    { title: 'Eco Acetate', desc: 'Lightweight, plant-based acetate for all-day wear.' },
    { title: 'Blue-light + Anti-fatigue', desc: 'Reduces eye strain for digital-first lifestyles.' },
    { title: 'AR Try-On', desc: 'Virtual try-on experience, right from your phone.' },
    { title: 'Memory-Foam Comfort', desc: 'Next‑level nose pads and temple tips for comfort.' },
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Smart Materials & Tech</h2>
            <p className="text-gray-600 mt-2">Engineered to perform. Designed to stand out.</p>
          </div>
          <a href="#contact" className="hidden sm:inline px-4 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-colors">Join Waitlist</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 p-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-black/5 mb-4" />
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
