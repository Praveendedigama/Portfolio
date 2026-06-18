import Reveal from "./Reveal.jsx";

/**
 * Consistent section header: small eyebrow label + large gradient-accented title,
 * with an optional supporting line.
 */
export default function SectionHeading({ eyebrow, title, accent, subtitle, align = "left" }) {
  const isCenter = align === "center";
  return (
    <Reveal className={isCenter ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-[var(--color-accent-cyan)] to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent-cyan)]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base text-white/60 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
