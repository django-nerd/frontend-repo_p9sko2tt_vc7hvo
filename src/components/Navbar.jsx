import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-xl font-black tracking-wider">NOVA<span className="text-blue-600">GAZE</span></span>
            <span className="hidden sm:inline text-xs font-medium text-gray-600">See Beyond Ordinary</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#series" className="hover:text-blue-600 transition-colors">Series</a>
            <a href="#positioning" className="hover:text-blue-600 transition-colors">Positioning</a>
            <a href="#technology" className="hover:text-blue-600 transition-colors">Technology</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-colors">Get Notified</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
