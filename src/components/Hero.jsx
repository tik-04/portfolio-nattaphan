import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowDown } from "lucide-react";
import { ease } from "./tokens";
import speaking1000 from "../assets/me/web/speaking-1000.webp";
import speaking2000 from "../assets/me/web/speaking-2000.webp";
import speakingPortrait from "../assets/me/web/speaking-portrait.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export default function Hero() {
  // photo drifts slower than the page for a light parallax
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* full-bleed photo */}
      <motion.div style={{ y: photoY }} className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={speakingPortrait} />
          <img
            src={speaking1000}
            srcSet={`${speaking1000} 1000w, ${speaking2000} 2000w`}
            sizes="100vw"
            alt="Nattaphan speaking into a microphone at a coding workshop"
            fetchPriority="high"
            decoding="async"
            className="hero-photo w-full h-full object-cover object-[50%_30%] md:object-[30%_40%]"
          />
        </picture>
      </motion.div>

      {/* readability gradients: bottom on mobile, right side on desktop */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(to top, rgba(26,24,20,0.95) 20%, rgba(26,24,20,0.4) 60%, rgba(26,24,20,0.1))" }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "linear-gradient(to left, rgba(26,24,20,0.94) 30%, rgba(26,24,20,0.55) 55%, rgba(26,24,20,0.05) 80%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 hidden md:block"
        style={{ background: "linear-gradient(to top, rgba(26,24,20,0.95) 15%, transparent)" }}
      />

      {/* content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative h-full flex flex-col justify-end md:justify-center px-6 md:px-16 lg:px-24 pb-28 md:pb-0"
      >
        <div className="md:ml-auto md:w-[52%] lg:w-[46%]">
          <motion.div {...fadeUp(0.1)} className="mb-6 flex items-center gap-3">
            <span
              className="font-mono text-[0.68rem] tracking-wider px-2.5 py-1 border"
              style={{ color: "var(--accent)", borderColor: "rgba(200,169,110,0.4)" }}
            >
              BACKEND · INTERN DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.02] tracking-tight mb-6"
            style={{ color: "var(--cream)" }}
          >
            Nattaphan
            <br />
            Pumipak
            <span style={{ color: "var(--accent)" }}>.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-base md:text-lg font-light max-w-md leading-relaxed mb-10"
            style={{ color: "rgba(245,242,237,0.72)" }}
          >
            IT student at KMUTT building the invisible layer that makes everything work —{" "}
            <em style={{ color: "var(--cream)" }}>APIs, backends, and systems that scale.</em>
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-[var(--accent)]"
              style={{ background: "var(--cream)", color: "var(--ink)" }}
            >
              View Projects
              <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-sm tracking-wide border transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ color: "var(--cream)", borderColor: "var(--line-dark)" }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 px-6 md:px-16 lg:px-24 flex items-center justify-between font-mono text-xs"
        style={{ color: "rgba(245,242,237,0.6)" }}
      >
        <span className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#6bbf7a" }} />
          Available for opportunities
        </span>
        <a href="#about" className="hidden md:flex items-center gap-2 hover:text-[var(--cream)] transition-colors">
          scroll <ArrowDown size={12} />
        </a>
        <span>Bangkok, TH</span>
      </motion.div>
    </section>
  );
}
