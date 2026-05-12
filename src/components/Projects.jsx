import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import { 
  SiTypescript, 
  SiExpress, 
  SiNestjs, 
  SiPostgresql, 
  SiMysql, 
  SiRedis, 
  SiDocker, 
  SiLinux, 
  SiNginx, 
  SiHtml5, 
  SiCss,
  SiJavascript,
  SiNodedotjs
} from "react-icons/si";

const projects = [
  {
    num: "01",
    title: "INTREGRATED PROJECT",
    desc: [
      `- Developed a full-stack web application for students to register and select academic tracks using 
            Express.js, Prisma ORM, and MySQL.`,
      `- Containerized the entire application using Docker, facilitating consistent development and production environments.`,
      `- Configured and deployed the application on a Linux server using Nginx as a reverse proxy to
            enhance security and performance.`,
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
    title: "ENTERPRISE NOTIFICATION GATEWAY",
    desc: [
              `- Built event-driven notification microservice supporting Email/SMS with retry,
              Dead Letter Queue, and Redis-based idempotency to prevent duplicate sends.`,
              `- Achieved 741 req/s throughput at p95 latency 73ms under 200 concurrent users.`,
              `- Monitored real-time queue depth and delivery rate via Prometheus + Grafana dashboard.`,
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
    title: "IT KMUTT Hello world camp | Backend Mentor",
    desc: [
              `- Led and mentored 30+ freshman students on backend development fundamentals, focusing on
                  Node.js and Express.js.`,
              `- Designed a comprehensive curriculum covering RESTful API design, middleware implementation,
                  and professional App Structure (MVC/Layered Architecture).`,
              `- Guided students through hands-on workshops to build their first functional API, emphasizing
                  clean code and industry best practices.`,
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

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group py-10"
      style={{ borderBottom: "1px solid var(--line)" }}
      data-hover
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs" style={{ color: "var(--ink-muted)" }}>
              {project.num}
            </span>
            <h3 className="text-xl font-medium tracking-tight" style={{ color: "var(--ink)" }}>
              {project.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed max-w-lg mb-5 font-light" style={{ color: "var(--ink-soft)" }}>
            <div className="tag">
              {project.desc.map((s) => (
              <>
                <span key={s}>{s}</span>
                <br />
              </>
            ))}
            </div>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => {
              const Icon = item.icon;
              return (
                <span 
                  key={item.name} 
                  className="tag" 
                  data-hover 
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "4px 8px", borderRadius: "4px" }}
                >
                  {Icon && <Icon size={14} style={{ color: item.color, flexShrink: 0 }} />}
                  <span className="text-[11px] font-medium uppercase tracking-wider">{item.name}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3 pt-1 flex-shrink-0">
          <a href={project.github} target="blank"
              className="p-2 transition-all duration-200" style={{ color: "var(--ink-muted)" }} data-hover aria-label="GitHub">
            <GitFork size={16} />
          </a>
          {project.live && (
            <a href={project.live} className="p-2 transition-all duration-200" style={{ color: "var(--ink-muted)" }} data-hover aria-label="Live demo">
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-8 md:px-16 lg:px-24 py-32">
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
            03 — PROJECTS
          </motion.span>
          <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-light tracking-tight mb-4"
          style={{ color: "var(--ink)" }}
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-light mb-16"
          style={{ color: "var(--ink-muted)" }}
        >
          Backend-focused projects — replace with your real work.
        </motion.p>
        <div style={{ borderTop: "1px solid var(--line)"}}>
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
