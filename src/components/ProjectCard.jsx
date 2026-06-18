import { useState } from "react";
import { LuGithub, LuExternalLink, LuArrowUpRight } from "react-icons/lu";

function Thumb({ image, title }) {
  const [err, setErr] = useState(false);
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  if (image && !err) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={() => setErr(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[var(--color-accent-cyan)]/15 via-[var(--color-accent-indigo)]/10 to-[var(--color-accent-fuchsia)]/15">
      <span className="font-display text-5xl font-bold text-white/30">
        {initials}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const primary = project.live && project.live !== "#" ? project.live : project.repo;

  return (
    <article className="glass glow-ring group flex flex-col overflow-hidden rounded-2xl">
      {/* Media */}
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-video overflow-hidden bg-white/5"
      >
        <Thumb image={project.image} title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white/90 text-[var(--color-base)] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <LuArrowUpRight className="h-4 w-4" />
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
          {project.type}
        </span>
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-white">
            {project.title}
          </h3>
          {project.period && (
            <span className="shrink-0 font-mono text-[11px] text-white/40">
              {project.period}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/55 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4 text-sm">
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[var(--color-accent-cyan)]"
            >
              <LuExternalLink className="h-4 w-4" /> Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[var(--color-accent-cyan)]"
            >
              <LuGithub className="h-4 w-4" />
              {project.repoBackend ? "Frontend" : "Code"}
            </a>
          )}
          {project.repoBackend && (
            <a
              href={project.repoBackend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 transition hover:text-[var(--color-accent-cyan)]"
            >
              <LuGithub className="h-4 w-4" /> Backend
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
