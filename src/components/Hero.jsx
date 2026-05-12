import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 pt-32"
    >
      {/* large ambient number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-24 right-12 font-mono text-[12rem] font-light leading-none select-none pointer-events-none"
        style={{ color: "var(--line)" }}
      >
        04
      </motion.div>

      <div className="max-w-4xl">
        {/* role badge */}
        <motion.div {...fadeUp(0.2)} className="mb-8">
          <span className="tag">Intern Developer</span>
        </motion.div>

        {/* name */}
        <motion.h1
          {...fadeUp(0.35)}
          className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-6"
          style={{ color: "var(--ink)" }}
        >
          Nattaphan Pumipak
          <br />
          <span style={{ color: "var(--ink-soft)" }}>KMUTT IT student</span>
        </motion.h1>

        {/* tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12"
          style={{ color: "var(--ink-soft)" }}
        >
          Building the invisible layer that makes everything work —{" "}
          <em>APIs, backends, and systems that scale.</em>
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex items-center gap-8">
          <a
            href="#projects"
            className="flex items-center gap-2 text-sm tracking-wide font-medium transition-all"
            style={{ color: "var(--ink)" }}
            data-hover
          >
            <span>View Projects</span>
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="link-line text-sm tracking-wide"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-6"
      >
        <span className="font-mono text-xs" style={{ color: "var(--ink-muted)" }}>
          Available for opportunities
        </span>
        <span
          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#6bbf7a" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-12 font-mono text-xs"
        style={{ color: "var(--ink-muted)" }}
      >
        Bangkok, TH
      </motion.div>
    </section>
  );
}
