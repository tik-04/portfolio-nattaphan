const words = [
  "Node.js", "Express", "NestJS", "TypeScript", "PostgreSQL", "Redis",
  "Docker", "Nginx", "Linux", "REST APIs", "Prometheus", "Grafana",
];

export default function Marquee() {
  // list is rendered twice so the -50% loop lands seamlessly
  const row = [...words, ...words];
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ background: "var(--ink)", borderColor: "var(--line-dark)" }}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-mono text-sm tracking-widest uppercase flex items-center"
            style={{ color: "rgba(245,242,237,0.55)" }}
          >
            <span className="px-6">{w}</span>
            <span style={{ color: "var(--accent)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
