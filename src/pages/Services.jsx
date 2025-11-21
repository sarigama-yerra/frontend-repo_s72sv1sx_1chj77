export default function Services(){
  const items = [
    {t:'Web Design & Development', img:'icon_web_design.png'},
    {t:'E-commerce Websites', img:'icon_ecommerce.png'},
    {t:'Portfolio & Personal Websites', img:'icon_portfolio.png'},
    {t:'Landing Pages', img:'icon_landing.png'},
    {t:'Website Maintenance & Support', img:'icon_support.png'},
    {t:'SEO & Performance Optimization', img:'icon_seo.png'},
  ]
  return (
    <div className="pt-16 bg-slate-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Services</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">Professional website design and development services. From e-commerce websites to portfolio websites and landing pages — all responsive and SEO-ready.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.t} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <img src={`/${i.img}`} alt={`${i.t} icon`} className="w-10 h-10 mb-4" loading="lazy" />
              <h3 className="text-white font-semibold mb-2">{i.t}</h3>
              <p className="text-slate-400 text-sm">Clean, modern, and performance-focused builds tailored to your goals.</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="inline-flex mt-10 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">Learn More About Our Services</a>
      </section>
    </div>
  )
}
