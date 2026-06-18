import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuExternalLink, LuZoomIn, LuX, LuBadgeCheck } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { certifications } from "../data/content.js";

// Decorative gradient + badge used when no image is available yet.
function Fallback({ title }) {
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[var(--color-accent-cyan)]/15 via-[var(--color-accent-indigo)]/10 to-[var(--color-accent-fuchsia)]/15">
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <LuBadgeCheck className="h-10 w-10 text-white/40" />
        <span className="text-xs text-white/40">{title}</span>
      </div>
    </div>
  );
}

function CertCard({ cert, index, onZoom }) {
  const [errored, setErrored] = useState(false);
  const hasImage = cert.image && !errored;

  return (
    <Reveal delay={index * 0.06} className="glass glow-ring group overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {hasImage ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            onError={() => setErrored(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Fallback title={cert.title} />
        )}

        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
          {cert.type}
        </span>

        {/* Hover overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onZoom(cert)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-xs font-medium text-[var(--color-base)] transition hover:bg-white"
          >
            <LuZoomIn className="h-4 w-4" /> Preview
          </button>
          {cert.link && cert.link !== "#" && (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-2 text-xs font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <LuExternalLink className="h-4 w-4" /> Verify
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-white">
          {cert.title}
        </h3>
        <p className="mt-1 text-sm text-white/55">{cert.issuer}</p>
        <a
          href={cert.link && cert.link !== "#" ? cert.link : undefined}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            if (!cert.link || cert.link === "#") {
              e.preventDefault();
              onZoom(cert);
            }
          }}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent-cyan)] transition hover:gap-2.5"
        >
          View Certificate <LuExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </Reveal>
  );
}

function Lightbox({ cert, onClose }) {
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl ring-1 ring-white/15"
      >
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white ring-1 ring-white/20 transition hover:bg-black/70"
        >
          <LuX className="h-5 w-5" />
        </button>

        {cert.image && !errored ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            onError={() => setErrored(true)}
            className="max-h-[88vh] w-full bg-[var(--color-base-2)] object-contain"
          />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-[var(--color-base-2)] p-8 text-center">
            <div>
              <LuBadgeCheck className="mx-auto h-12 w-12 text-white/40" />
              <p className="mt-3 font-display text-lg font-semibold text-white">
                {cert.title}
              </p>
              <p className="mt-1 text-sm text-white/55">{cert.issuer}</p>
              <p className="mt-4 text-xs text-white/35">
                Add the certificate image to{" "}
                <code className="font-mono">{cert.image}</code>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials &"
          accent="courses"
          subtitle="Verified certifications and courses that back up my full-stack and DevOps foundations."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title + cert.type} cert={cert} index={i} onZoom={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
