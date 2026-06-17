import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  LuMail, LuPhone, LuMapPin, LuGithub, LuLinkedin, LuSend,
  LuLoaderCircle, LuCheck, LuTriangleAlert,
} from "react-icons/lu";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { socials, profile } from "../data/content.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailjsReady = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const channels = [
  { Icon: LuMail, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
  { Icon: LuPhone, label: "Phone", value: socials.phone, href: socials.phoneHref },
  { Icon: LuMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendViaMailto = () => {
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} <${form.email}>`;
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Graceful fallback when EmailJS isn't configured yet.
    if (!emailjsReady) {
      sendViaMailto();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-cyan)]";

  return (
    <section id="contact" className="section-py">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build"
          accent="something"
          align="center"
          subtitle="Have a role, a project, or just want to say hi? My inbox is always open."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact channels */}
          <Reveal className="flex flex-col gap-4">
            {channels.map(({ Icon, label, value, href }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={label}
                  href={href ?? undefined}
                  className="glass glow-ring flex items-center gap-4 rounded-2xl p-5 transition hover:bg-white/[0.07]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-fuchsia)]/20 text-[var(--color-accent-cyan)] ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-white/45">{label}</div>
                    <div className="truncate text-sm font-medium text-white">
                      {value}
                    </div>
                  </div>
                </Tag>
              );
            })}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-white/45">Find me online</div>
              <div className="mt-3 flex gap-2">
                {[
                  { href: socials.github, Icon: LuGithub, label: "GitHub" },
                  { href: socials.linkedin, Icon: LuLinkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl text-white/70 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:text-white hover:ring-white/30"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project or role…"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-indigo)] px-6 py-3 text-sm font-semibold text-[var(--color-base)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <LuLoaderCircle className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <LuSend className="h-4 w-4" /> Send message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400">
                  <LuCheck className="h-4 w-4" />
                  {emailjsReady
                    ? "Thanks! Your message has been sent."
                    : "Opening your email app to send…"}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-red-400">
                  <LuTriangleAlert className="h-4 w-4" />
                  Something went wrong. Please email me directly.
                </p>
              )}
              {!emailjsReady && status === "idle" && (
                <p className="mt-3 text-xs text-white/35">
                  This form opens your email client. (Wire up EmailJS keys in{" "}
                  <code className="font-mono">.env</code> for direct delivery.)
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
