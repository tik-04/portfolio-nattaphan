import { Reveal, SectionHeader } from "./ui";
import { sectionPad } from "./tokens";
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

function CategoryCard({ cat, index }) {
  return (
    <Reveal
      delay={index * 0.08}
      className="p-7 md:p-8 border transition-colors duration-300 hover:border-[var(--accent)]"
      style={{ background: "var(--cream-deep)", borderColor: "var(--line)" }}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--ink-muted)" }}>
          {cat.label}
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
          {String(cat.items.length).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item) => {
          const Icon = item.icon;
          return (
            <span
              key={item.name}
              className="tag"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--cream)", padding: "0.35rem 0.7rem" }}
            >
              {Icon && <Icon size={13} style={{ color: item.color, flexShrink: 0 }} />}
              {item.name}
            </span>
          );
        })}
      </div>
    </Reveal>
  );
}

export default function Stack() {
  return (
    <section id="stack" className={`${sectionPad} py-24 md:py-28`}>
      <SectionHeader index="02" label="Stack" title="Tools I work with" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.label} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
