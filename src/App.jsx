import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Series from './components/Series'
import Positioning from './components/Positioning'
import Technology from './components/Technology'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Series />
      <Positioning />
      <Technology />

      <footer id="contact" className="border-t border-black/5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black">NOVA<span className="text-blue-600">GAZE</span></h3>
              <p className="text-gray-600 mt-2">For digital‑first Indians who want both style and comfort, NOVAGAZE delivers expressive eyewear with smart lens technology and fashion‑forward designs.</p>
              <p className="text-sm text-gray-500 mt-4">Tagline: See Beyond Ordinary.</p>
            </div>
            <div>
              <form onSubmit={(e)=>e.preventDefault()} className="bg-white border border-black/5 rounded-2xl p-4 flex gap-3">
                <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">Join Waitlist</button>
              </form>
              <p className="text-xs text-gray-500 mt-3">We’ll email you when preorders open.</p>
            </div>
          </div>
          <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} NOVAGAZE. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
