import { LuGraduationCap, LuTrophy, LuCode, LuUsers } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { education, activities } from "../data/content.js";

const activityIcon = {
  code: LuCode,
  users: LuUsers,
  trophy: LuTrophy,
};

export default function Education() {
  return (
    <section id="education" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Education &"
          accent="beyond"
          subtitle="My academic path, plus the activities that shaped how I work and collaborate."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Education timeline */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <LuGraduationCap className="h-5 w-5 text-[var(--color-accent-cyan)]" />
              Education
            </h3>
            <div className="relative space-y-6 border-l border-white/10 pl-6">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.08} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-[var(--color-accent-cyan)] ring-4 ring-[var(--color-base)]" />
                  <div className="glass rounded-2xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display font-semibold text-white">
                        {e.school}
                      </h4>
                      <span className="font-mono text-[11px] text-white/45">
                        {e.period}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-[var(--color-accent-cyan)]">
                      {e.qualification}
                    </div>
                    <div className="mt-1 text-sm font-medium text-white/80">
                      {e.detail}
                    </div>
                    <p className="mt-2 text-sm text-white/55">{e.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <LuTrophy className="h-5 w-5 text-[var(--color-accent-fuchsia)]" />
              Activities & Leadership
            </h3>
            <div className="grid gap-4">
              {activities.map((a, i) => {
                const Icon = activityIcon[a.icon] ?? LuCode;
                return (
                  <Reveal
                    key={a.role + a.org}
                    delay={i * 0.06}
                    className="glass glow-ring flex gap-4 rounded-2xl p-5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[var(--color-accent-fuchsia)] ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-semibold text-white">{a.role}</h4>
                        <span className="font-mono text-[11px] text-white/45">
                          {a.period}
                        </span>
                      </div>
                      <div className="text-sm text-white/70">{a.org}</div>
                      <p className="mt-1 text-sm text-white/50">{a.note}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
