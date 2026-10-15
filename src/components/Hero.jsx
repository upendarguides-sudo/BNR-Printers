import { ArrowRight, Check, MapPin, Phone, Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50" id="home">
      <div className="pointer-events-none absolute -right-32 -top-44 size-[34rem] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-semibold text-blue-900 shadow-sm">
            <MapPin size={15} className="text-blue-700" />
            Your local printer experts in Khammam
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-blue-950 sm:text-5xl lg:text-[3.5rem]">
            Expert Printer Repair Services in Khammam
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Fast, reliable, and on-site printer repairs for homes and offices. We fix all major brands.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            <span className="flex items-center gap-1.5 text-amber-500">
              <Star size={16} fill="currentColor" />
              4.9/5
            </span>
            <span className="h-4 w-px bg-slate-200" />
            Rating on Google
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Book On-Site Service
              <ArrowRight size={17} />
            </a>
            <a
              href="tel:08919852715"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-blue-950 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check size={12} strokeWidth={3} />
              </span>
              On-site service
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check size={12} strokeWidth={3} />
              </span>
              All major brands
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-blue-100 sm:-inset-4" />
          <img
            src="/hero.jpg"
            alt="A multifunction printer ready for expert repair"
            className="relative h-[19rem] w-full rounded-xl object-cover shadow-lg sm:h-[26rem]"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xl sm:bottom-6 sm:-left-8 sm:p-4">
            <span className="flex size-11 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <Check size={21} strokeWidth={2.5} />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900">Expert care, right on-site</span>
              <span className="mt-0.5 block text-xs text-slate-500">Convenient repairs at your place</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
