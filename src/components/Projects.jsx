import { LuGithub } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects, socials } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projects" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've"
            accent="built"
            subtitle="A selection of personal and academic projects beyond my day-to-day work."
          />
          <Reveal>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <LuGithub className="h-4 w-4" />
              View GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
