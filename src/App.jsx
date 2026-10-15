import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-700">
              <span className="text-lg">B</span>
            </span>
            BNR Printer Services
          </a>
          <p className="text-sm text-slate-400">© 2026 BNR Printer Services</p>
          <a className="text-sm text-slate-400 transition hover:text-white" href="tel:08919852715">
            Call: 089198 52715
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
