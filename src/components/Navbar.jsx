import { useState } from 'react'
import { Menu, Phone, Printer, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <a href="#home" className="flex items-center gap-2.5 text-blue-950">
          <span className="flex size-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm">
            <Printer size={21} strokeWidth={2.2} />
          </span>
          <span className="text-lg font-extrabold tracking-tight">BNR Printers</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:flex"
          href="tel:08919852715"
        >
          <Phone size={16} />
          Call: 089198 52715
        </a>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-3 sm:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-0"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white"
              href="tel:08919852715"
            >
              <Phone size={16} />
              Call: 089198 52715
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
