import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const cvHref = '/cv.pdf'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition bg-slate-950/70 ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 ring-1 ring-white/10' : ''}`}>
      <div className="container-px">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            {/* <div className="h-8 w-8 rounded bg-sky-500" /> */}
            <span className="font-semibold font-['Poppins'] tracking-wide" >Praveen Dedigama</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition">
                {l.label}
              </a>
            ))}
            <a href={cvHref} download="Praveen-Dedigama-CV.pdf" className="inline-flex items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
              Download CV
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center rounded border border-white/15 p-2 text-white/80 hover:text-white hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded px-3 py-2 text-white/90 hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <a href={cvHref} download="Praveen-Dedigama-CV.pdf" onClick={() => setOpen(false)} className="rounded px-3 py-2 text-white/90 hover:bg-white/10">
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


