import { useEffect, useRef } from "react";

const HOVERABLE = "a, button, [data-hover]";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // touch screens get the native behaviour (CSS hides the elements too)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0, ringY = 0, curX = 0, curY = 0, frame;

    const onMove = (e) => {
      curX = e.clientX;
      curY = e.clientY;
      dot.style.left = curX + "px";
      dot.style.top = curY + "px";
    };

    // delegated, so links rendered after mount are picked up too
    const onOver = (e) => {
      const hovering = !!e.target.closest?.(HOVERABLE);
      dot.classList.toggle("hovering", hovering);
      ring.classList.toggle("hovering", hovering);
    };

    const animate = () => {
      ringX += (curX - ringX) * 0.15;
      ringY += (curY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
