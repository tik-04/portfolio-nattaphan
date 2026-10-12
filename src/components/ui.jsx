import { motion } from "framer-motion";
import { ease } from "./tokens";

// fades + lifts children into place the first time they scroll into view
export function Reveal({ as = "div", delay = 0, y = 20, className = "", style, children }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({ index, label, title, dark = false }) {
  return (
    <>
      <Reveal className="flex items-center gap-8 mb-10 md:mb-14" y={0}>
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: dark ? "var(--accent)" : "var(--ink-muted)" }}
        >
          {index} — {label}
        </span>
        <div className="flex-1 h-px" style={{ background: dark ? "var(--line-dark)" : "var(--line)" }} />
      </Reveal>
      {title && (
        <Reveal
          as="h2"
          delay={0.1}
          className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05] mb-14 md:mb-20"
          style={{ color: dark ? "var(--cream)" : "var(--ink)" }}
        >
          {title}
        </Reveal>
      )}
    </>
  );
}
