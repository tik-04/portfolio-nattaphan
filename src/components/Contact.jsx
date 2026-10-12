import { useState } from "react";
import { ArrowUpRight, Check, Copy, GitFork, ExternalLink } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";
import { sectionPad } from "./tokens";

const email = "natthaphan0074@gmail.com";

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/tik-04", handle: "tik-04" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com/in/", handle: "Nattaphan Pumipak" },
];

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked (http / old browser) — the mailto link still works
    }
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-3 py-2 border transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      style={{ color: "rgba(245,242,237,0.7)", borderColor: "var(--line-dark)" }}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionPad} pt-24 md:pt-28 pb-10`}
      style={{ background: "var(--ink)", color: "var(--cream)" }}
    >
      <SectionHeader index="04" label="Contact" dark />

      <Reveal
        as="h2"
        className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[1] mb-10"
        style={{ color: "var(--cream)" }}
      >
        Let's build
        <br />
        something<span style={{ color: "var(--accent)" }}>.</span>
      </Reveal>

      <Reveal
        as="p"
        delay={0.1}
        className="text-base font-light max-w-md leading-relaxed mb-14"
        style={{ color: "rgba(245,242,237,0.65)" }}
      >
        Open to backend intern roles, API work, or just a good conversation about distributed
        systems. Reach out any time.
      </Reveal>

      <Reveal delay={0.15} className="flex flex-col items-start sm:flex-row sm:items-center gap-5 mb-20">
        <a
          href={`mailto:${email}`}
          className="group inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-light break-all"
          style={{ color: "var(--cream)" }}
        >
          <span className="border-b pb-1 transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]" style={{ borderColor: "var(--line-dark)" }}>
            {email}
          </span>
          <ArrowUpRight size={24} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
        <CopyEmail />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ borderTop: "1px solid var(--line-dark)" }}>
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={0.2 + i * 0.08}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between py-6 ${i ? "sm:px-6 sm:border-l" : "sm:pr-6"}`}
                style={{ borderBottom: "1px solid var(--line-dark)", borderLeftColor: "var(--line-dark)" }}
              >
                <span className="flex items-center gap-4">
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "rgba(245,242,237,0.5)" }}>
                    {s.label}
                  </span>
                  <span className="text-sm" style={{ color: "var(--cream)" }}>{s.handle}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-all duration-300 opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          );
        })}
      </div>

      <footer className="mt-24 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between font-mono text-xs" style={{ color: "rgba(245,242,237,0.4)" }}>
        <span>© {new Date().getFullYear()} Nattaphan Pumipak</span>
        <span className="tracking-[0.3em]" style={{ color: "rgba(245,242,237,0.7)" }}>N|P|T</span>
        <a href="#top" className="hover:text-[var(--cream)] transition-colors">Back to top ↑</a>
      </footer>
    </section>
  );
}
