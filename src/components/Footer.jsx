function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/samest_logo.png" alt="SamEst Web Dev logo" className="w-12 h-12" />
          <p className="text-slate-300 text-sm max-w-xs">Modern. Bold. Professional. We build high-impact websites that perform and convert.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>Email: contact@samestwebdev.com</li>
            <li>Phone: +233 24 000 0000</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow</h4>
          <div className="flex items-center gap-3">
            <img src="/icon_linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            <img src="/icon_instagram.png" alt="Instagram" className="w-6 h-6" />
            <img src="/icon_twitter.png" alt="Twitter" className="w-6 h-6" />
            <img src="/icon_facebook.png" alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <p className="text-center text-slate-400 text-xs">© 2025 SamEst Web Dev • Modern. Bold. Professional.</p>
      </div>
    </footer>
  )
}

export default Footer
