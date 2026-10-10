import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import speaking from "../assets/me/web/speaking.jpg";
import whiteboard from "../assets/me/web/whiteboard.jpg";
import mentoring from "../assets/me/web/mentoring.jpg";

const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

// photo that wipes in from a solid block, then reveals the image
function Photo({ src, alt, position = "center", delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay }}
      className={`relative overflow-hidden group ${className}`}
      style={{ background: "var(--line)" }}
      data-hover
    >
      <motion.img
        src={src}
        alt={alt}
        loading="eager"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease, delay }}
        className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-[filter] duration-700"
        style={{ objectPosition: position }}
      />
    </motion.div>
  );
}

function Caption({ index, children, className = "" }) {
  return (
    <span
      className={`font-mono text-[0.65rem] tracking-wide flex items-center gap-2 ${className}`}
      style={{ color: "var(--ink-muted)" }}
    >
      <span style={{ color: "var(--accent)" }}>{index}</span>
      <span className="inline-block w-4 h-px" style={{ background: "var(--line)" }} />
      {children}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yTop = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-end pb-32 lg:pb-24 px-8 md:px-16 lg:px-24 pt-32"
    >
      {/* text */}
      <div className="lg:col-span-7 relative z-10">
        {/* role badge */}
        <motion.div {...fadeUp(0.2)} className="mb-8 flex items-center gap-3">
          <span className="tag">Intern Developer</span>
          <span className="font-mono text-[0.68rem]" style={{ color: "var(--ink-muted)" }}>
            SIT · KMUTT
          </span>
        </motion.div>

        {/* name */}
        <motion.h1
          {...fadeUp(0.35)}
          className="text-6xl md:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight mb-6"
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
            className="group flex items-center gap-2 text-sm tracking-wide font-medium transition-all"
            style={{ color: "var(--ink)" }}
            data-hover
          >
            <span>View Projects</span>
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="link-line text-sm tracking-wide">
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* photo collage */}
      <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none lg:mr-0 lg:mb-4">
        {/* accent frame offset behind main photo */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, x: 14, y: 14 }}
          transition={{ duration: 0.8, ease, delay: 2.5 }}
          className="absolute inset-0 ml-10 lg:ml-16 border pointer-events-none"
          style={{ borderColor: "var(--accent)" }}
        />

        {/* main portrait */}
        <motion.div style={{ y: yMain }} className="relative ml-10 lg:ml-16">
          <Photo
            src={speaking}
            alt="Nattaphan speaking with a microphone at a coding event"
            position="30% 40%"
            delay={1.5}
            className="aspect-[4/5]"
          />
        </motion.div>

        {/* small top-right: mentoring */}
        <motion.div
          style={{ y: yTop }}
          className="hidden md:block absolute -top-12 -right-4 lg:-right-8 w-32 lg:w-36 z-20 shadow-xl"
        >
          <Photo
            src={mentoring}
            alt="Nattaphan mentoring students at their screens"
            position="38% 25%"
            delay={1.95}
            className="aspect-square"
          />
        </motion.div>

        {/* small bottom-left: whiteboard */}
        <motion.div
          style={{ y: ySmall }}
          className="absolute -bottom-10 left-0 w-40 md:w-48 lg:w-52 z-20 shadow-xl"
        >
          <Photo
            src={whiteboard}
            alt="Explaining an Express API route structure on a whiteboard"
            position="45% 50%"
            delay={1.8}
            className="aspect-[4/3]"
          />
          <Caption index="02" className="mt-2">
            Route → Controller → Service
          </Caption>
        </motion.div>

        {/* main caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="hidden md:flex justify-end mt-3"
        >
          <Caption index="01">Talking backend, live</Caption>
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
        className="absolute bottom-8 right-8 md:right-16 lg:right-24 font-mono text-xs"
        style={{ color: "var(--ink-muted)" }}
      >
        Bangkok, TH
      </motion.div>
    </section>
  );
}
