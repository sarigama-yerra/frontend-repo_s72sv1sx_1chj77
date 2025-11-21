import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItem = 'text-sm md:text-base text-slate-200 hover:text-white transition-colors'
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/samest_logo.png" alt="SamEst Web Dev logo" className="w-8 h-8" />
          <span className="font-extrabold tracking-tight text-white text-lg md:text-xl">SamEst Web Dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>About</NavLink>
          <NavLink to="/services" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>Portfolio</NavLink>
          <NavLink to="/blog" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=>`${navItem} ${isActive?'text-white':'text-slate-300'}`}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg shadow-orange-500/20">Get Started</Link>
      </div>
    </header>
  )
}

export default Navbar
