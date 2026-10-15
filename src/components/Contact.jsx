import { useState } from 'react'
import { Clock3, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const issue = formData.get('issue')
    const message = `Hello BNR Printer Services, I am ${name}. My phone number is ${phone}. Printer issue: ${issue}`
    const requestUrl = `https://wa.me/918919852715?text=${encodeURIComponent(message)}`
    window.open(requestUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section className="bg-slate-50 py-20 sm:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Let’s get you printing again</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            Book a printer service
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Tell us what’s wrong or give us a call. We’re here to help across Khammam.
          </p>
        </div>

        <div className="mt-11 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-blue-950 p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Contact &amp; location</p>
            <h3 className="mt-3 text-2xl font-bold">We’re close by.</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/80">
              Local printer experts, ready to help at your home or workplace.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="text-xs font-medium text-blue-200">Address</p>
                  <p className="mt-1 text-sm font-semibold leading-6">Prashanthi, Khammam, Telangana</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Prashanthi%2C+Khammam%2C+Telangana"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-xs font-semibold text-blue-200 underline decoration-blue-200/50 underline-offset-4 hover:text-white"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                  <Phone size={19} />
                </span>
                <div>
                  <p className="text-xs font-medium text-blue-200">Phone</p>
                  <a href="tel:08919852715" className="mt-1 block text-sm font-semibold hover:text-blue-200">
                    089198 52715
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                  <Clock3 size={19} />
                </span>
                <div>
                  <p className="text-xs font-medium text-blue-200">Timings</p>
                  <p className="mt-1 text-sm font-semibold">Open Mon-Sat, Closes 7:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3.5">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex size-3 rounded-full bg-green-400" />
              </span>
              <span className="text-sm font-semibold text-green-100">Available for On-Site Service Today</span>
            </div>
          </div>

          <div className="p-7 sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-blue-950">Tell us what you need</h3>
              <p className="mt-2 text-sm text-slate-500">Share a few details and continue your request on WhatsApp.</p>
            </div>
            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                <input
                  autoComplete="name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                <input
                  autoComplete="tel"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  id="phone"
                  inputMode="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label htmlFor="issue" className="mb-2 block text-sm font-semibold text-slate-700">Printer Issue</label>
                <textarea
                  className="min-h-28 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  id="issue"
                  name="issue"
                  placeholder="Tell us a little about the issue"
                  required
                  rows="3"
                />
              </div>
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                type="submit"
              >
                <Send size={16} />
                Send service request
              </button>
              {sent && (
                <p aria-live="polite" className="flex items-center gap-2 text-sm font-medium text-green-700">
                  <MessageCircle size={16} />
                  Your request is ready in WhatsApp. Send it there to reach us.
                </p>
              )}
              <p className="text-center text-xs leading-5 text-slate-500">
                WhatsApp will open with your message ready to send. No details are stored on this website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
