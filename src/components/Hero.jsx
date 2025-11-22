import { motion } from 'framer-motion'

const heroImages = [
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975603465-7c2f8d0a9c0e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512203492609-8f7f06f1fbd7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511405889574-b01de1da5441?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514416309827-bfb0f0b0f0e1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509622900787-e6a5375e5d37?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop'
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
            >
              NOVAGAZE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">See Beyond Ordinary</span>
            </motion.h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A tech-fashion eyewear label built for Gen Z & young professionals. Lightweight eco-acetate, blue-light & anti-fatigue lenses, AR try-on, and bold expressive frames.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#series" className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Explore Series</a>
              <a href="#technology" className="px-5 py-3 rounded-full border border-gray-300 font-semibold hover:border-gray-900 transition-colors">Why NovaGaze</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-bold text-gray-900">High Tech</span>
                <p>Blue-light | AR Try-On | Anti-fatigue</p>
              </div>
              <div>
                <span className="font-bold text-gray-900">High Comfort</span>
                <p>Memory-foam nose pads | Lightweight TR90</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-[2px] shadow-2xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white">
                <div className="h-full w-full grid grid-cols-3 gap-2 p-2">
                  {heroImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`NOVAGAZE eyewear ${i + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-black/5">
              <p className="text-xs font-semibold text-gray-700">AR try-on coming soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
