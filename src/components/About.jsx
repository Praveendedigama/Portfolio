import { LuMapPin, LuGraduationCap, LuBriefcase, LuFileText } from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { profile, socials } from "../data/content.js";

const facts = [
  { Icon: LuBriefcase, label: "Role", value: "Jr. Software Engineer" },
  { Icon: LuGraduationCap, label: "Education", value: "BSc (Hons) SE — Kelaniya" },
  { Icon: LuMapPin, label: "Based in", value: profile.location },
  { Icon: LuFileText, label: "Focus", value: "Full-Stack · AI · Cloud" },
];

export default function About() {
  return (
    <section id="about" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A bit" accent="about me" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Portrait */}
          <Reveal>
            <div className="glow-ring mx-auto max-w-sm rounded-3xl">
              <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img
                  src={profile.photo2 || profile.photo}
                  alt={`${profile.name}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-white/75">
              {profile.summary}
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              I'm driven by innovation and continuous learning, with strong
              problem-solving skills and the ability to work effectively in
              collaborative, Agile teams. Right now I'm{" "}
              <span className="text-white">
                {profile.availabilityText.toLowerCase()}
              </span>
              .
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {facts.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-accent-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-white/45">{label}</div>
                    <div className="truncate text-sm font-medium text-white">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.cv}
                download="Praveen-Dedigama-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-base transition hover:bg-white/90"
              >
                <LuFileText className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Let's talk
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
