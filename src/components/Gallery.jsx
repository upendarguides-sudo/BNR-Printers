import { ArrowUpRight } from 'lucide-react'

const photos = [
  { src: '/shop-1.jpg', alt: 'Inkjet printer ready for service', label: 'Printer care' },
  { src: '/shop-2.jpg', alt: 'Office copier used for everyday printing', label: 'Office printers' },
  { src: '/shop-3.jpg', alt: 'A person operating a multifunction printer', label: 'Everyday printing' },
]

function Gallery() {
  return (
    <section className="bg-white py-20 sm:py-24" id="gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">A closer look</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Our Store &amp; Work in Action
            </h2>
            <p className="mt-3 text-base text-slate-600">Real service, real results.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-700 transition hover:text-blue-900 sm:self-auto"
          >
            Need a repair? Get in touch <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="group relative overflow-hidden rounded-xl bg-slate-100">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-64 w-full rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
