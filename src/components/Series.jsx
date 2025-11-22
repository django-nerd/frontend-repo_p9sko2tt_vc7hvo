export default function Series() {
  const series = [
    {
      name: "Lumen Series",
      desc: "Lightweight TR90 frames with blue-light lenses.",
      price: "₹1,999–₹3,499",
      color: "from-blue-500/15",
      points: ["Featherweight TR90", "Blue-light protection", "All-day comfort"],
    },
    {
      name: "Flux Series",
      desc: "Tint-adjusting lenses with titanium frames.",
      price: "₹4,999–₹7,999",
      color: "from-purple-500/15",
      points: ["Photochromic lenses", "Titanium hardware", "Scratch-resistant"],
    },
    {
      name: "Street Series",
      desc: "Chunky, colorful, artist-collab designs.",
      price: "₹1,499–₹2,699",
      color: "from-rose-500/15",
      points: ["Bold silhouettes", "Limited collabs", "High pigment acetate"],
    },
    {
      name: "Kids Series",
      desc: "Flexible rubber frames with blue-light lenses.",
      price: "₹899–₹1,299",
      color: "from-emerald-500/15",
      points: ["Flexible + safe", "Blue-light lenses", "Play-proof"],
    },
  ]

  return (
    <section id="series" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Product Series</h2>
            <p className="text-gray-600 mt-2">Expressive eyewear crafted for life online and off.</p>
          </div>
          <a href="#" className="hidden sm:inline px-4 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-colors">Notify me at launch</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {series.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-black/5 bg-gradient-to-b from-transparent to-white p-5 hover:shadow-xl transition-all">
              <div className={`h-40 rounded-xl bg-gradient-to-br ${s.color} to-white border border-black/5 mb-4`} />
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-black text-white">{s.price}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <button className="mt-4 w-full rounded-lg border border-gray-300 py-2 font-semibold group-hover:border-gray-900">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
