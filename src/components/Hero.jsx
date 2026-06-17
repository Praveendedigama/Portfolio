import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LuArrowDown, LuMapPin, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { profile, socials, stats } from "../data/content.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function RotatingRole() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-block align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4 }}
          className="gradient-text font-semibold"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center">
      <div className="container-px w-full pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Left: copy */}
          <div>
            {profile.available && (
              <motion.div
                variants={item}
                className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/80"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availabilityText}
              </motion.div>
            )}

            <motion.p variants={item} className="mt-6 text-lg text-white/60">
              Hi, I'm
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-1 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              {profile.firstName}{" "}
              <span className="gradient-text">{profile.lastName}</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-4 text-2xl font-medium text-white/90 sm:text-3xl"
            >
              <RotatingRole />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <LuMapPin className="h-4 w-4" />
              {profile.location}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-indigo)] px-6 py-3 text-sm font-semibold text-[var(--color-base)] shadow-lg shadow-[var(--color-accent-indigo)]/20 transition hover:shadow-xl hover:shadow-[var(--color-accent-indigo)]/30"
              >
                View My Work
                <LuArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              {[
                { href: socials.github, label: "GitHub", Icon: LuGithub },
                { href: socials.linkedin, label: "LinkedIn", Icon: LuLinkedin },
                { href: `mailto:${socials.email}`, label: "Email", Icon: LuMail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-white/70 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:text-white hover:ring-white/30"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
            <div className="animate-float relative">
              <div className="glow-ring rounded-[2rem]">
                <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="aspect-[4/5] w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating accent card */}
              <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 shadow-lg">
                <div className="font-mono text-xs text-white/50">currently</div>
                <div className="text-sm font-semibold text-white">
                  Jr. Software Engineer
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-4 py-5 text-center"
            >
              <div className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-white/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
