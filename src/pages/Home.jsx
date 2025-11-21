import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Pill({children}){return <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">{children}</span>}

export default function Home(){
  return (
    <div className="pt-16">
      {/* Hero with Spline background */}
      <section className="relative h-[80vh] min-h-[540px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Fallback hero image for SEO/alt */}
          <img src="/hero_home.jpg" alt="Modern tech abstract background" className="sr-only" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-6">
              <Pill>Web development</Pill>
              <Pill>Professional websites</Pill>
              <Pill>SEO Optimized</Pill>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">Building Modern and Bold Websites for Everyone</h1>
            <p className="text-slate-200 text-lg md:text-xl mb-8">SamEst Web Dev turns ideas into professional, high-impact digital experiences.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg shadow-orange-500/20">Our Services</Link>
              <Link to="/contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Services */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Services</h2>
          <p className="text-slate-300 mb-10 max-w-2xl">Website design, e-commerce websites, portfolio websites, landing pages, and custom solutions — all optimized for SEO and performance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {t:'Web Design',img:'icon_web_design.png'},
              {t:'E-commerce',img:'icon_ecommerce.png'},
              {t:'Portfolio',img:'icon_portfolio.png'},
              {t:'Landing Page',img:'icon_landing.png'},
              {t:'Custom Solutions',img:'icon_custom.png'},
            ].map((i)=> (
              <div key={i.t} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
                <img src={`/${i.img}`} alt={`${i.t} icon`} className="w-10 h-10 mb-4" loading="lazy" />
                <h3 className="text-white font-semibold mb-2">{i.t}</h3>
                <p className="text-slate-400 text-sm">Clean design, bold visuals, and responsive layouts tailored to your goals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Professional Design & UX',
              'Fast Delivery & Launch',
              'SEO Optimized & Performance-Ready',
              'Fully Responsive',
            ].map((t)=> (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-white font-semibold mb-2">{t}</h3>
                <p className="text-slate-400 text-sm">We build experiences that impress, engage, and convert visitors into customers.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Portfolio Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {img:'project1.jpg', title:'Fashion E-commerce Website', desc:'Bold, clean, and mobile-ready'},
              {img:'project2.jpg', title:'Creative Photographer Portfolio', desc:'Stunning visuals and smooth UX'},
              {img:'project3.jpg', title:'Marketing Landing Page', desc:'High conversion rate design'},
            ].map((p)=> (
              <div key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img src={`/${p.img}`} alt={p.title} className="w-full h-60 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {img:'avatar1.png', text:'"SamEst Web Dev transformed our website into a modern powerhouse!" – Jane D.'},
              {img:'avatar2.png', text:'"Professional, fast, and creative. Our e-commerce store is thriving!" – Mark A.'},
            ].map((t)=> (
              <div key={t.text} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex gap-4 items-start">
                <img src={`/${t.img}`} alt="Client avatar" className="w-12 h-12 rounded-full" loading="lazy" />
                <p className="text-slate-300">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-1">Ready to Build Your Website?</h3>
            <p className="text-white/90">Let’s create a professional, high-impact online presence for you.</p>
          </div>
          <Link to="/contact" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
