export default function Portfolio(){
  const projects = [
    {img:'project1.jpg', title:'Fashion E-commerce Website', desc:'Bold, clean, mobile-ready e-commerce experience.'},
    {img:'project2.jpg', title:'Creative Photographer Portfolio', desc:'Stunning visuals and smooth UX for creatives.'},
    {img:'project3.jpg', title:'Marketing Landing Page', desc:'High conversion landing page design.'},
    {img:'project4.jpg', title:'SaaS Product Website', desc:'Modern, bold SaaS marketing site.'},
  ]
  return (
    <div className="pt-16 bg-slate-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Portfolio</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">A selection of portfolio websites, e-commerce websites, and landing pages designed to perform.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.title} href="#" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <img src={`/${p.img}`} alt={p.title} className="w-full h-60 object-cover group-hover:opacity-90 transition" loading="lazy" />
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
