export default function Blog(){
  const posts = [
    {img:'blog1.jpg', title:'5 Tips for Modern Website Design in 2025', excerpt:'Learn the latest trends and best practices for bold, modern website design.'},
    {img:'blog2.jpg', title:'How to Optimize Your Website for SEO', excerpt:'Actionable techniques to improve search rankings and performance.'},
    {img:'blog3.jpg', title:'Why Responsive Design is Critical for Business', excerpt:'Reach more customers with mobile-first, responsive design.'},
  ]
  return (
    <div className="pt-16 bg-slate-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Blog & Insights</h1>
        <p className="text-slate-300 mb-10 max-w-2xl">Articles covering website design, web development, e-commerce websites, and SEO optimization.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <a key={p.title} href="#" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <img src={`/${p.img}`} alt={p.title} className="w-full h-[180px] object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="#" className="inline-flex mt-10 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20">Read More Articles</a>
      </section>
    </div>
  )
}
