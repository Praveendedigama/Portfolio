import {
  SiTypescript, SiJavascript, SiC, SiReact, SiNextdotjs, SiTailwindcss,
  SiShadcnui, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiNestjs,
  SiPostgresql, SiPrisma, SiMongodb, SiMysql, SiDocker, SiGooglecloud,
  SiGraphql, SiGit, SiGithub, SiTurborepo, SiJira, SiTrello, SiPostman,
  SiSupabase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  LuCode, LuLayoutGrid, LuServer, LuDatabase, LuCloud, LuWrench,
  LuBrainCircuit, LuSparkles, LuCpu,
} from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { skillGroups, methodologies } from "../data/content.js";

// Brand icon + brand color per skill key (colors tint on hover)
const skillIcon = {
  typescript: [SiTypescript, "#3178C6"],
  javascript: [SiJavascript, "#F7DF1E"],
  java: [FaJava, "#E76F00"],
  c: [SiC, "#A8B9CC"],
  react: [SiReact, "#61DAFB"],
  nextjs: [SiNextdotjs, "#FFFFFF"],
  tailwind: [SiTailwindcss, "#38BDF8"],
  shadcn: [SiShadcnui, "#FFFFFF"],
  html5: [SiHtml5, "#E34F26"],
  css3: [SiCss, "#663399"],
  nodejs: [SiNodedotjs, "#5FA04E"],
  express: [SiExpress, "#FFFFFF"],
  nestjs: [SiNestjs, "#E0234E"],
  postgresql: [SiPostgresql, "#4169E1"],
  prisma: [SiPrisma, "#FFFFFF"],
  mongodb: [SiMongodb, "#47A248"],
  mysql: [SiMysql, "#4479A1"],
  docker: [SiDocker, "#2496ED"],
  gcp: [SiGooglecloud, "#4285F4"],
  graphql: [SiGraphql, "#E10098"],
  git: [SiGit, "#F05032"],
  github: [SiGithub, "#FFFFFF"],
  turborepo: [SiTurborepo, "#EF4444"],
  jira: [SiJira, "#0052CC"],
  trello: [SiTrello, "#0052CC"],
  postman: [SiPostman, "#FF6C37"],
  supabase: [SiSupabase, "#3FCF8E"],
  vertexai: [LuCpu, "#22d3ee"],
  prompt: [LuSparkles, "#e879f9"],
  embeddings: [LuBrainCircuit, "#818cf8"],
};

const groupIcon = {
  code: LuCode,
  layout: LuLayoutGrid,
  server: LuServer,
  database: LuDatabase,
  cloud: LuCloud,
  ai: LuBrainCircuit,
  tool: LuWrench,
};

function SkillChip({ name, iconKey }) {
  const [Icon, color] = skillIcon[iconKey] ?? [LuCpu, "#FFFFFF"];
  return (
    <span className="group/chip inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/75 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white">
      <Icon
        className="h-4 w-4 text-white/55 transition-colors group-hover/chip:[color:var(--chip)]"
        style={{ "--chip": color }}
      />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build"
          accent="with"
          subtitle="A modern full-stack toolkit spanning typed languages, React/Next.js frontends, NestJS & Node backends, databases, cloud, and AI engineering."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const GIcon = groupIcon[group.icon] ?? LuCode;
            return (
              <Reveal
                key={group.title}
                delay={i * 0.06}
                className="glass glow-ring rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-fuchsia)]/20 text-[var(--color-accent-cyan)] ring-1 ring-white/10">
                    <GIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <SkillChip key={s.name} name={s.name} iconKey={s.icon} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Methodologies marquee */}
        <Reveal delay={0.1} className="mt-8">
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 py-4">
            <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
              {[...methodologies, ...methodologies].map((m, idx) => (
                <span
                  key={idx}
                  className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1.5 font-mono text-xs text-white/60 ring-1 ring-white/10"
                >
                  {m}
                </span>
              ))}
            </div>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-base)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-base)] to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
