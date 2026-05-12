import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "about", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
      style={{
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        background: scrolled ? "rgba(245,242,237,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <a href="#" className="font-mono text-xs tracking-widest" style={{ color: "var(--ink-muted)" }}>
        NATTAPHAN.PORTFOLIO
      </a>

      <nav className="flex items-center gap-8">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
            className="link-line font-mono text-xs tracking-wider"
          >
            {l.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
}
