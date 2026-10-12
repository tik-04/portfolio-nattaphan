import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ease } from "./tokens";

const links = [
  { label: "about", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");

  // turn solid once the dark hero banner has scrolled away
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const fg = solid ? "var(--ink)" : "var(--cream)";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 flex justify-between items-center"
      style={{
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
        background: solid ? "rgba(245,242,237,0.88)" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        WebkitBackdropFilter: solid ? "blur(12px)" : "none",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <a href="#top" className="font-mono text-sm tracking-[0.3em] transition-colors duration-300" style={{ color: fg }}>
        N|P|T
      </a>

      <nav className="flex items-center gap-5 md:gap-8">
        {links.map((l) => {
          const isActive = active === l.href.slice(1);
          return (
            <a
              key={l.label}
              href={l.href}
              className="relative font-mono text-[0.68rem] md:text-xs tracking-wider transition-colors duration-300"
              style={{ color: isActive ? "var(--accent)" : fg, opacity: isActive ? 1 : 0.75 }}
            >
              {l.label}
              {isActive && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
