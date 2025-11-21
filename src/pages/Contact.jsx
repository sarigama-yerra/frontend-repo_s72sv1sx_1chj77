import { useState } from 'react'

export default function Contact(){
  const [status,setStatus]=useState('')

  async function onSubmit(e){
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Message sent! We will get back to you shortly.')
        e.currentTarget.reset()
      }else{
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    }catch(err){
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[360px] w-full">
        <img src="/hero_contact.jpg" alt="Dark contact background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Contact</h1>
        </div>
      </section>

      <section id="contact" className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Phone Number</label>
              <input name="phone" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Service Interested In</label>
              <select name="service" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none">
                <option>Web Design</option>
                <option>E-commerce</option>
                <option>Portfolio</option>
                <option>Landing Page</option>
                <option>Custom Solutions</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Message</label>
              <textarea name="message" rows={5} className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none" />
            </div>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">Send Message</button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Contact Info</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Email: contact@samestwebdev.com</li>
                <li>Phone: +233 24 000 0000</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-white font-semibold mb-2">Social</h3>
              <div className="flex items-center gap-3">
                <img src="/icon_linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                <img src="/icon_instagram.png" alt="Instagram" className="w-6 h-6" />
                <img src="/icon_twitter.png" alt="Twitter" className="w-6 h-6" />
                <img src="/icon_facebook.png" alt="Facebook" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
