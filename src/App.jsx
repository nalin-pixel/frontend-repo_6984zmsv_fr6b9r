import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Book Us', href: '#contact' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-600 shadow-inner" />
            <span className="font-semibold text-gray-900 text-lg">EventFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {i.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-600 text-white px-4 py-2 text-sm shadow hover:opacity-95">
              Get a Quote
            </a>
          </nav>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2 text-gray-700">
                {i.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-600 text-white px-4 py-2 text-sm shadow">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm mb-4">
            Tech-forward event experiences
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            We plan. We design. We deliver unforgettable events.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From intimate meetups to vibrant festivals, we handle end-to-end production for small organizations with big ambitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-600 text-white px-5 py-3 text-sm shadow hover:opacity-95">
              Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm shadow hover:bg-gray-800">
              Book Your Event
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const cards = [
    {
      title: 'Startup Launch Night',
      desc: 'Brand launch event with immersive lighting, live demos, and a 200-guest afterparty.',
      tag: 'Product Launch',
      img: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81d?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Community Culture Fest',
      desc: 'Day-long celebration with local artists, food stalls, and a playful tech zone.',
      tag: 'Festival',
      img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Leaders Meetup Series',
      desc: 'Quarterly micro-conference with speakers, workshops, and sponsor lounges.',
      tag: 'Conference',
      img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1600&auto=format&fit=crop',
    },
  ]
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Projects & Event Showcase</h2>
          <p className="mt-2 text-gray-600">A taste of what we craft for our community and clients.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-flex text-[11px] uppercase tracking-wide text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{c.tag}</span>
                <h3 className="mt-2 font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const points = [
    {
      title: 'End-to-end Production',
      desc: 'Planning, vendor coordination, stage, AV, branding, and on-ground ops — all covered.',
    },
    {
      title: 'Budget-smart Creativity',
      desc: 'Impactful experiences tailored for small orgs and startups — without breaking the bank.',
    },
    {
      title: 'Playful, Modern Aesthetic',
      desc: 'Tech-inspired visuals that feel friendly and interactive, not corporate.',
    },
  ]
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Us</h2>
            <p className="mt-3 text-gray-600">
              We are an event design studio building memorable experiences for communities, startups, and local brands. From concept to curtain call, our agile team blends logistics, storytelling, and tech to make moments that matter.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="rounded-xl p-5 bg-white ring-1 ring-black/5 shadow-sm">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-0 bg-gradient-to-tr from-fuchsia-200/50 to-blue-200/50 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1644959166965-8606f1ce1f06?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVudCUyMGNyb3dkfGVufDB8MHx8fDE3NjI3NzQxNDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Event crowd" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('Form submission:', data)
    setSent(true)
    e.currentTarget.reset()
  }
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-indigo-50/60 to-white">
      <div className="absolute inset-x-0 -top-16 mx-auto w-72 h-72 bg-blue-400/20 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Book an Event</h2>
          <p className="mt-2 text-gray-600">Tell us about your event and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Type</label>
                <select name="type" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Conference</option>
                  <option>Meetup</option>
                  <option>Launch</option>
                  <option>Festival</option>
                  <option>Private</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" name="date" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget (USD)</label>
                <input type="number" name="budget" min="0" step="100" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about the vibe, audience size, venue, or special ideas…" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-600 text-white px-6 py-3 text-sm shadow hover:opacity-95">
                Send Request
              </button>
              {sent && <span className="text-sm text-green-700">Thanks! We’ll be in touch shortly.</span>}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white p-6 shadow">
              <h3 className="font-semibold">What we manage</h3>
              <ul className="mt-3 space-y-2 text-sm/6">
                <li>• Venue scouting & vendor coordination</li>
                <li>• Stage, sound, and lighting</li>
                <li>• Branding, signage, and swag</li>
                <li>• Speaker & artist management</li>
                <li>• Registration and guest ops</li>
                <li>• Run-of-show & on-ground crew</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <p className="mt-2 text-sm text-gray-600">
                Prefer WhatsApp or email? We’ll adapt to your flow.
              </p>
              <div className="mt-3 text-sm text-gray-700">
                hello@eventflow.studio
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600" />
          <span className="font-medium text-gray-800">EventFlow</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} EventFlow Studio — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
