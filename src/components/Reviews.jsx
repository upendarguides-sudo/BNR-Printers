import { ArrowUpRight, Star } from 'lucide-react'

function Reviews() {
  return (
    <section id="reviews" className="bg-blue-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Khammam customers recommend us</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Trusted printer support, backed by our community
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80">
            See what local customers are saying about BNR Printer Services on Google.
          </p>
        </div>
        <a
          href="https://www.google.com/search?q=BNR+Printer+Services+Khammam+reviews"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
        >
          <span>
            <span className="flex items-center gap-1 text-amber-400" aria-label="5 stars">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
            </span>
            <span className="mt-2 block text-3xl font-extrabold">4.9<span className="text-lg text-blue-100">/5</span></span>
            <span className="mt-1 block text-xs text-blue-100/80">77+ Google Reviews</span>
          </span>
          <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Reviews
