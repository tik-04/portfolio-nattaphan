import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiPython, SiTypescript, SiJavascript, SiGo, SiExpress, SiNestjs, SiNextdotjs, SiReact, SiFastapi, SiPostgresql, SiMysql, SiRedis, SiMongodb, SiDocker, SiLinux, SiGraphql } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const categories = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "REST API", icon: null, color: null },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "WebSocket", icon: null, color: null },
    ],
  },
];

function CategoryBlock({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-8"
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
        <span
          className="font-mono text-xs tracking-widest uppercase w-28 flex-shrink-0 pt-0.5"
          style={{ color: "var(--ink-muted)" }}
        >
          {cat.label}
        </span>
        <div className="flex flex-wrap gap-2">
          {cat.items.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.name} className="tag" data-hover style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                {Icon && <Icon size={12} style={{ color: item.color, flexShrink: 0 }} />}
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-4xl">
        {/* section header */}
        <div className="flex items-center gap-8 mb-16">
          <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest"
            style={{ color: "var(--ink-muted)" }}
          >
            02 — STACK
          </motion.span>
          <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-light tracking-tight mb-16"
          style={{ color: "var(--ink)" }}
        >
          Tools I work with
        </motion.h2>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
