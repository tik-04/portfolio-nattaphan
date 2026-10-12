import { Reveal, SectionHeader } from "./ui";
import { sectionPad } from "./tokens";

const stats = [
  { value: "741", unit: "req/s", label: "Notification gateway throughput under 200 concurrent users" },
  { value: "73", unit: "ms", label: "p95 latency on the same load test" },
  { value: "30+", unit: "", label: "Freshmen mentored in backend fundamentals at Hello World camp" },
];

export default function About() {
  return (
    <section id="about" className={`${sectionPad} py-24 md:py-28`}>
      <SectionHeader index="01" label="About" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal
            as="p"
            className="text-2xl md:text-4xl font-light leading-snug tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            I like the parts of software nobody sees —{" "}
            <span style={{ color: "var(--ink-muted)" }}>
              queues that retry, APIs that don't send twice, servers that stay up.
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-8 text-base font-light leading-relaxed max-w-xl"
            style={{ color: "var(--ink-soft)" }}
          >
            I'm an IT student at the School of Information Technology, KMUTT. I build backends with
            Node.js, NestJS and PostgreSQL, ship them in Docker behind Nginx, and measure them before
            calling them done. I also enjoy teaching it — explaining a layered architecture on a
            whiteboard is the best way I know to make sure I understand it.
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-10">
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.1 + i * 0.1}
                className="py-6 flex items-baseline gap-6"
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <span className="text-5xl md:text-6xl font-light tracking-tight shrink-0 w-36" style={{ color: "var(--ink)" }}>
                  {s.value}
                  <span className="font-mono text-sm ml-1" style={{ color: "var(--accent)" }}>{s.unit}</span>
                </span>
                <span className="text-sm font-light leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
