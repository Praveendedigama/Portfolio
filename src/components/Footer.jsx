import { LuGithub, LuLinkedin, LuMail, LuArrowUp } from "react-icons/lu";
import { socials, profile, navLinks } from "../data/content.js";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-fuchsia)] text-sm font-bold text-[var(--color-base)]">
                P
              </span>
              {profile.name}
            </a>
            <p className="mt-3 text-sm text-white/55">
              {profile.title} crafting scalable, AI-integrated products.
              {" "}References available on request.
            </p>
          </div>

          {/* Quick links */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/55 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-start gap-2">
            {[
              { href: socials.github, Icon: LuGithub, label: "GitHub" },
              { href: socials.linkedin, Icon: LuLinkedin, label: "LinkedIn" },
              { href: `mailto:${socials.email}`, Icon: LuMail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl text-white/70 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:text-white hover:ring-white/30"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            Back to top <LuArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
