import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ZoomImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  zoomScale?: number;
  className?: string;
};

const ZoomImage = ({
  src,
  alt = "",
  width = 400,
  height = 400,
  zoomScale = 1.8,
  className,
}: ZoomImageProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: "50%", y: "50%" });
  const [isZoomed, setIsZoomed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    posRef.current = { x: `${x}%`, y: `${y}%` };

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--x", posRef.current.x);
          containerRef.current.style.setProperty("--y", posRef.current.y);
        }
        rafRef.current = null;
      });
    }
  };

  const onEnter = () => setIsZoomed(true);
  const onLeave = () => {
    setIsZoomed(false);
    if (containerRef.current) {
      containerRef.current.style.setProperty("--x", "50%");
      containerRef.current.style.setProperty("--y", "50%");
    }
  };

  // cancel any pending raf on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const transition = reduceMotion ? "none" : "transform 200ms ease";

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="overflow-hidden relative w-full h-full"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full rounded-2xl ${className ?? ""}`}
        style={{
          transformOrigin: "var(--x, 50%) var(--y, 50%)",
          transform: isZoomed ? `scale(${zoomScale})` : "scale(1)",
          transition,
          transitionDelay: isZoomed ? "800ms" : "0ms",
        }}
      />
    </div>
  );
};

export default ZoomImage;
