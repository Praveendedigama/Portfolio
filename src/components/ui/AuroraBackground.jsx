/**
 * Fixed, decorative aurora background — blurred gradient blobs that drift slowly,
 * plus a faint grid. Sits behind all content. Purely decorative (aria-hidden).
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base vignette */}
      <div className="absolute inset-0 bg-[var(--color-base)]" />

      {/* Aurora blobs */}
      <div className="animate-aurora absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-[var(--color-accent-cyan)] opacity-20 blur-[120px]" />
      <div
        className="animate-aurora absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-[var(--color-accent-fuchsia)] opacity-20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent-indigo)] opacity-20 blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Darken toward the bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-base)]" />
    </div>
  );
}
