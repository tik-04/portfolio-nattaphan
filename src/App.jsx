import { motion, AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 1.5 }}
      style={{ pointerEvents: "none" }}
      className="fixed inset-0 z-[9000] flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: "var(--ink)" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.85, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right", background: "var(--accent)", position: "absolute", inset: 0 }}
      />
      <div className="absolute inset-0" style={{ background: "var(--ink)" }} />
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ times: [0, 0.2, 0.7, 1], duration: 1.4 }}
        className="relative font-mono text-xs tracking-[0.35em] uppercase z-10"
        style={{ color: "var(--cream)", letterSpacing: "0.3em" }}
      >
        portfolio
      </motion.span>
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <Cursor />
      <Intro />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Stack />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
