import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LuMenu, LuX, LuDownload } from "react-icons/lu";
import { navLinks, profile } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Shrink/blur the bar after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="container-px">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="group flex items-center gap-2 font-display text-base font-semibold"
            >
              <span className="hidden text-white sm:inline">
                Praveen
                <span className="text-accent-cyan">.dev</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {l.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.cv}
                download="Praveen-Dedigama-CV.pdf"
                className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-base transition hover:bg-white/90 sm:inline-flex"
              >
                <LuDownload className="h-4 w-4" />
                Resume
              </a>

              <button
                className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="h-0.5 origin-left bg-linear-to-r from-accent-cyan via-(--color-accent-indigo) to-accent-fuchsia"
          style={{ scaleX: progress }}
        />
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-3 mt-2 rounded-2xl p-3 md:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm transition ${
                  active === l.href
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download="Praveen-Dedigama-CV.pdf"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-base"
            >
              <LuDownload className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
