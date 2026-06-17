import { useState } from "react";
import { LuBuilding2, LuChevronRight, LuExternalLink } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { experience } from "../data/content.js";

function ProductCard({ product, index }) {
  return (
    <Reveal
      delay={index * 0.08}
      className="glass glow-ring group relative overflow-hidden rounded-2xl p-6"
    >
      {/* corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-accent-indigo)]/20 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-xl font-bold text-white">
          {product.name}
        </h4>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[var(--color-accent-cyan)] ring-1 ring-white/10">
          {product.kind}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {product.blurb}
      </p>

      <ul className="mt-4 space-y-2.5">
        {product.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-white/70">
            <LuChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-fuchsia)]" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/55 ring-1 ring-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      {product.live && (
        <div className="mt-4 border-t border-white/5 pt-4">
          <a
            href={product.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan transition hover:text-white"
          >
            <LuExternalLink className="h-3.5 w-3.5" />
            {product.live.replace("https://www.", "")}
          </a>
        </div>
      )}
    </Reveal>
  );
}

function CompanyLogo({ src, alt }) {
  const [err, setErr] = useState(false);
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-white/10">
      {src && !err ? (
        <img
          src={src}
          alt={alt}
          onError={() => setErr(true)}
          className="h-full w-full object-contain p-1"
        />
      ) : (
        <LuBuilding2 className="h-6 w-6 text-accent-cyan" />
      )}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          accent="shipped"
          subtitle="Hands-on industry work building production features for a super-app ecosystem."
        />

        <div className="mt-12 space-y-12">
          {experience.map((job) => (
            <div key={job.company}>
              {/* Role header */}
              <Reveal className="glass relative overflow-hidden rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <CompanyLogo src={job.logo} alt={job.company} />
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <div className="text-sm text-white/70">{job.company}</div>
                      <div className="mt-1 text-xs text-white/45">
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1.5 font-mono text-xs text-white/60 ring-1 ring-white/10">
                    {job.period}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65">
                  {job.summary}
                </p>
              </Reveal>

              {/* Flagship products */}
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {job.products.map((p, i) => (
                  <ProductCard key={p.name} product={p} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
