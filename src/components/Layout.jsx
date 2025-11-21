import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'

export default function Layout(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
