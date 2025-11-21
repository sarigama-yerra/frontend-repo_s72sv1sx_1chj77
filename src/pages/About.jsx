export default function About(){
  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[360px] w-full">
        <img src="/hero_about.jpg" alt="Dark professional office" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">About SamEst Web Dev</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-slate-300 text-lg">At SamEst Web Dev, our mission is to craft bold, modern, and fully functional websites that elevate businesses and personal brands. We create digital experiences that impress, engage, and convert visitors into loyal customers.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Our Expertise</h3>
              <p className="text-slate-400">Web development, website design, SEO optimization, performance, and client-focused solutions. We build e-commerce websites, portfolio websites, and high-converting landing pages.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Approach</h3>
              <p className="text-slate-400">Clean design, bold typography, smooth UX, and responsive layouts. We focus on results and long-term support.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/avatar1.png" alt="Sam Est – Founder & Lead Developer" className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-white font-semibold">Sam Est</p>
              <p className="text-slate-400 text-sm">Founder & Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
