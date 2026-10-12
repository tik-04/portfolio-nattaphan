import { ArrowUpRight, GitFork } from "lucide-react";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiNginx,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { Reveal, SectionHeader } from "./ui";
import { sectionPad } from "./tokens";
import mentoring from "../assets/me/web/mentoring.webp";
import whiteboard from "../assets/me/web/whiteboard.webp";
import pairing from "../assets/me/web/pairing.webp";

const projects = [
  {
    num: "01",
    kind: "Full-stack web app",
    title: "Integrated Project",
    desc: [
      "Developed a full-stack web application for students to register and select academic tracks using Express.js, Prisma ORM, and MySQL.",
      "Containerized the entire application using Docker, facilitating consistent development and production environments.",
      "Configured and deployed the application on a Linux server using Nginx as a reverse proxy to enhance security and performance.",
    ],
    stack: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ],
    github: "#",
    live: null,
  },
  {
    num: "02",
    kind: "Microservice",
    title: "Enterprise Notification Gateway",
    metrics: [
      { value: "741", label: "req/s" },
      { value: "73ms", label: "p95 latency" },
      { value: "200", label: "concurrent users" },
    ],
    desc: [
      "Built event-driven notification microservice supporting Email/SMS with retry, Dead Letter Queue, and Redis-based idempotency to prevent duplicate sends.",
      "Achieved 741 req/s throughput at p95 latency 73ms under 200 concurrent users.",
      "Monitored real-time queue depth and delivery rate via Prometheus + Grafana dashboard.",
    ],
    stack: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    github: "https://github.com/tik-04/Enterprise-noti",
    live: "#",
  },
  {
    num: "03",
    kind: "Backend Mentor",
    title: "IT KMUTT Hello World Camp",
    desc: [
      "Led and mentored 30+ freshman students on backend development fundamentals, focusing on Node.js and Express.js.",
      "Designed a comprehensive curriculum covering RESTful API design, middleware implementation, and professional App Structure (MVC/Layered Architecture).",
      "Guided students through hands-on workshops to build their first functional API, emphasizing clean code and industry best practices.",
    ],
    photos: [
      { src: whiteboard, alt: "Explaining route, controller and service layers on a whiteboard" },
      { src: mentoring, alt: "Mentoring students as they debug their code" },
      { src: pairing, alt: "Pairing with a student on their first API" },
    ],
    stack: [
      { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    github: "#",
    live: "#",
  },
];

// "#" is a placeholder — don't render a link that goes nowhere
const isReal = (href) => href && href !== "#";

function ProjectRow({ project }) {
  return (
    <Reveal className="group py-12 md:py-16" style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* left: identity */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs">
            <span style={{ color: "var(--accent)" }}>{project.num}</span>
            <span className="inline-block w-6 h-px" style={{ background: "var(--line)" }} />
            <span className="uppercase tracking-widest" style={{ color: "var(--ink-muted)" }}>
              {project.kind}
            </span>
          </div>
          <h3
            className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-6 transition-colors duration-300 group-hover:text-[var(--ink-soft)]"
            style={{ color: "var(--ink)" }}
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-5">
            {isReal(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-2 font-mono text-xs tracking-wider"
              >
                <GitFork size={14} /> Source
              </a>
            )}
            {isReal(project.live) && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-2 font-mono text-xs tracking-wider"
              >
                <ArrowUpRight size={14} /> Live
              </a>
            )}
          </div>
        </div>

        {/* right: details */}
        <div className="lg:col-span-7">
          {project.metrics && (
            <div className="grid grid-cols-3 mb-8 border" style={{ borderColor: "var(--line)" }}>
              {project.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="px-4 py-4"
                  style={{ borderLeft: i ? "1px solid var(--line)" : "none", background: "var(--cream-deep)" }}
                >
                  <div className="text-2xl md:text-3xl font-light tracking-tight" style={{ color: "var(--ink)" }}>
                    {m.value}
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-wider mt-1" style={{ color: "var(--ink-muted)" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.photos && (
            <div className="grid grid-cols-3 gap-2 mb-8">
              {project.photos.map((p) => (
                <div key={p.src} className="aspect-[4/3] overflow-hidden" style={{ background: "var(--line)" }}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-3 mb-8">
            {project.desc.map((line) => (
              <li key={line} className="flex gap-4 text-sm md:text-[0.95rem] font-light leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <span className="mt-[0.6em] w-3 h-px shrink-0" style={{ background: "var(--accent)" }} />
                {line}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.name} className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  {Icon && <Icon size={12} style={{ color: item.color, flexShrink: 0 }} />}
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`${sectionPad} py-24 md:py-28`} style={{ background: "var(--cream)" }}>
      <SectionHeader index="03" label="Projects" title="Selected work" />
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {projects.map((p) => (
          <ProjectRow key={p.num} project={p} />
        ))}
      </div>
    </section>
  );
}
