import { MotionConfig } from "framer-motion";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    // respects the OS "reduce motion" setting for every framer animation
    <MotionConfig reducedMotion="user">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </MotionConfig>
  );
}
