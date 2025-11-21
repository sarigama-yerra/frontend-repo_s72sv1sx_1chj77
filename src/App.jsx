import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Home from './pages/Home'

function App(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
