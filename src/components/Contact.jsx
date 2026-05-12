import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, GitFork } from "lucide-react";

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/tik-04", handle: "@GitHub - tik-04" },
  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com/in/", handle: "Linkedin - Nattaphan Pumipak" },
  { icon: Mail, label: "Email", href: "natthaphan0074@gmail.com", handle: "natthaphan0074@gmail.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-4xl">
        <div className="flex items-center gap-8 mb-16">
          <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--ink-muted)" }}
          >
            04 — CONTACT
          </motion.span>
          <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-8"
          style={{ color: "var(--ink)" }}
        >
          Let's build
          <br />
          something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base font-light max-w-md leading-relaxed mb-16"
          style={{ color: "var(--ink-soft)" }}
        >
          Open to Intern backend roles, API work, or just a good conversation
          about distributed systems. Reach out any time.
        </motion.p>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center justify-between py-6 group"
                style={{ borderBottom: "1px solid var(--line)" }}
                data-hover
              >
                <div className="flex items-center gap-4">
                  <Icon size={15} style={{ color: "var(--ink-muted)" }} />
                  <span className="text-sm font-mono tracking-wide" style={{ color: "var(--ink-soft)" }}>
                    {s.handle}
                  </span>
                </div>
                <span className="font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--accent)" }}>
                  {s.label} ↗
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-24 flex items-center justify-between max-w-4xl"
      >
        <span className="font-mono text-xs" style={{ color: "var(--ink-muted)" }}>© {new Date().getFullYear()} Nattaphan Pumipak </span>
        <span className="font-mono text-xs" style={{ color: "var(--ink-muted)" }}>Built with React + Vite</span>
      </motion.div>
    </section>
  );
}
