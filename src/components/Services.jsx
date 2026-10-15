import {
  BadgeCheck,
  Check,
  Cpu,
  Droplets,
  Printer,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'

const highlights = [
  { icon: Wrench, title: 'On-Site Service', detail: 'We come to your home or office' },
  { icon: BadgeCheck, title: 'Certified Experts', detail: 'Experienced printer technicians' },
  { icon: Zap, title: 'Same Day Repair', detail: 'Fast help for urgent printer issues' },
]

const services = [
  {
    icon: Printer,
    title: 'Laser Printer Repair',
    description: 'Reliable diagnosis and repair for paper jams, print quality, and hardware issues.',
  },
  {
    icon: Droplets,
    title: 'Inkjet Service',
    description: 'Resolve clogged nozzles, ink flow problems, and faded or streaky prints.',
  },
  {
    icon: Zap,
    title: 'Toner Refilling & Cartridges',
    description: 'Quality toner refills and cartridge support to keep your printer working.',
  },
  {
    icon: Cpu,
    title: 'Chip-Level Motherboard Repair',
    description: 'Advanced board-level troubleshooting for complex printer faults.',
  },
]

function Services() {
  return (
    <>
      <section aria-label="Service highlights" className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className={`flex items-center gap-4 px-5 py-5 sm:px-7 ${
                index > 0 ? 'border-t border-slate-100 sm:border-l sm:border-t-0' : ''
              }`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={23} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-blue-950">{title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24" id="services">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">How we can help</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Printer care, done right
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            From everyday print issues to complex repairs, get dependable support for the printer you rely on.
          </p>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <Icon size={23} />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-blue-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
              >
                Ask about this service <Check size={14} />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-green-600" />Careful, expert diagnosis</span>
          <span className="inline-flex items-center gap-2"><Check size={16} className="text-green-600" />Service for homes and offices</span>
        </div>
      </section>
    </>
  )
}

export default Services
