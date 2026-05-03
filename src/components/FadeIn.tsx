import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  visible?: boolean;
}>;

export default function FadeIn({
  className,
  delay = 0,
  duration = 420,
  distance = 18,
  threshold = 0.18,
  once = true,
  visible = true,
  children,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      setIsVisible(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold, visible]);

  const style = {
    "--fade-delay": `${delay}ms`,
    "--fade-duration": `${duration}ms`,
    "--fade-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={isVisible ? "visible" : "hidden"}
      style={style}
    >
      {children}
    </div>
  );
}
