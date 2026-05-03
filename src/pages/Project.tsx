import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import { FadeIn } from "../components";
import { projectCaseStudies } from "../data/siteContent";
import "../styles/Project.scss";

const AUTOPLAY_DELAY = 3600;
const TRACK_GAP = 14;

function Projects() {
  const projectCount = projectCaseStudies.length;

  /**
   * Triple-clone: [set-A, set-B (real), set-C]
   *
   * set-A → indices  0           …  projectCount - 1
   * set-B → indices  projectCount … 2*projectCount - 1  ← we always navigate here
   * set-C → indices  2*projectCount … 3*projectCount - 1
   *
   * After reaching set-A or set-C we silently teleport back to the
   * equivalent position inside set-B.  Because there is always a FULL
   * copy of every card on each side, the viewport can never show empty space.
   */
  const loopedProjects = useMemo(() => {
    if (projectCount === 0) return [];
    return [
      ...projectCaseStudies, // set-A (left buffer)
      ...projectCaseStudies, // set-B (canonical)
      ...projectCaseStudies, // set-C (right buffer)
    ];
  }, [projectCount]);

  // Start at the first card of set-B
  const [currentIndex, setCurrentIndex] = useState(
    projectCount > 0 ? projectCount : 0,
  );

  // Ref + state pair so className updates without batching races
  const transitionEnabledRef = useRef(false);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const [cardWidth, setCardWidth] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const sampleCardRef = useRef<HTMLElement | null>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  // ── Reduced-motion ────────────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { prefersReducedMotionRef.current = mq.matches; };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // ── Measure ───────────────────────────────────────────────────────────────
  const measureTrack = useCallback(() => {
    const viewport = viewportRef.current;
    const sample = sampleCardRef.current;
    if (!viewport || !sample) return;
    const cw = Math.round(sample.getBoundingClientRect().width);
    const sp = Math.max(0, Math.round((viewport.clientWidth - cw) / 2));
    setCardWidth((prev) => (prev === cw ? prev : cw));
    setSidePadding((prev) => (prev === sp ? prev : sp));
  }, []);

  useLayoutEffect(() => {
    measureTrack();
    const viewport = viewportRef.current;
    const sample = sampleCardRef.current;
    if (!viewport || !sample) return;
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measureTrack);
      ro.observe(viewport);
      ro.observe(sample);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measureTrack);
    return () => window.removeEventListener("resize", measureTrack);
  }, [loopedProjects.length, measureTrack]);

  // ── Autoplay ──────────────────────────────────────────────────────────────
  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current !== null) {
      window.clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (projectCount <= 1 || prefersReducedMotionRef.current) return;
    stopAutoplay();
    autoplayTimerRef.current = window.setTimeout(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      transitionEnabledRef.current = true;
      setTransitionEnabled(true);
      setCurrentIndex((i) => i + 1);
    }, AUTOPLAY_DELAY);
  }, [projectCount, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  // ── Manual navigation ─────────────────────────────────────────────────────
  const moveBy = useCallback(
    (direction: -1 | 1) => {
      if (projectCount <= 1 || isAnimatingRef.current) return;
      stopAutoplay();

      if (prefersReducedMotionRef.current) {
        // Instant jump clamped inside set-B
        setCurrentIndex((i) => {
          const next = i + direction;
          if (next < projectCount) return 2 * projectCount - 1;
          if (next >= 2 * projectCount) return projectCount;
          return next;
        });
        return;
      }

      isAnimatingRef.current = true;
      transitionEnabledRef.current = true;
      setTransitionEnabled(true);
      setCurrentIndex((i) => i + direction);
    },
    [projectCount, stopAutoplay],
  );

  // ── Transition end ────────────────────────────────────────────────────────
  const handleTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== "transform") return;

      // currentIndex is captured via closure; check if we've left set-B
      const inSetA = currentIndex < projectCount;
      const inSetC = currentIndex >= 2 * projectCount;

      if (!inSetA && !inSetC) {
        // Normal slide inside set-B — nothing to teleport
        isAnimatingRef.current = false;
        startAutoplay();
        return;
      }

      // Teleport: move by exactly ±projectCount so the visual position is identical
      const targetIndex = inSetA
        ? currentIndex + projectCount
        : currentIndex - projectCount;

      // 1. Kill transition
      transitionEnabledRef.current = false;
      setTransitionEnabled(false);
      // 2. Snap to equivalent set-B position (no visual change)
      setCurrentIndex(targetIndex);

      // 3. Two rAFs: frame N+1 paints the snapped position,
      //    frame N+2 re-enables transition (invisible to the user)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          transitionEnabledRef.current = true;
          setTransitionEnabled(true);
          isAnimatingRef.current = false;
          startAutoplay();
        });
      });
    },
    [currentIndex, projectCount, startAutoplay],
  );

  // ── Derived values ────────────────────────────────────────────────────────
  const step = cardWidth + TRACK_GAP;
  const trackOffset = sidePadding + currentIndex * step;
  // Active highlight: which card within the real array is "current"
  const activeProjectIndex = projectCount > 0 ? currentIndex % projectCount : 0;

  return (
    <section id="projects" className="projects-section section" aria-label="Projetos">
      <div className="section__inner">
        <FadeIn className="section-header" duration={420}>
          <p className="eyebrow">Projetos</p>
          <div className="projects-header">
            <div>
              <h2 className="section-title">Projetos selecionados.</h2>
              <p className="projects-header__hint">Passa sozinho. Use as setas para navegar.</p>
            </div>

            <div className="projects-controls" aria-label="Navegacao dos projetos">
              <button
                type="button"
                className="projects-control"
                onClick={() => moveBy(-1)}
                aria-label="Projeto anterior"
              >
                <ChevronLeftRoundedIcon />
              </button>
              <button
                type="button"
                className="projects-control"
                onClick={() => moveBy(1)}
                aria-label="Proximo projeto"
              >
                <ChevronRightRoundedIcon />
              </button>
            </div>
          </div>
        </FadeIn>

        <div ref={viewportRef} className="projects-viewport">
          <div
            className={`projects-track${transitionEnabled ? "" : " projects-track--no-transition"}`}
            style={{
              paddingInline: `${sidePadding}px`,
              transform: `translate3d(-${trackOffset}px, 0, 0)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedProjects.map((project, index) => {
              const isActive = index % projectCount === activeProjectIndex;
              // Cards outside set-B are decorative clones
              const isClone = index < projectCount || index >= 2 * projectCount;

              return (
                <article
                  key={`${project.id}-${index}`}
                  // Use any set-B card as the measurement reference
                  ref={index === projectCount ? sampleCardRef : undefined}
                  className={`project-card card${isActive ? " is-active" : ""}`}
                  aria-hidden={isClone}
                >
                  <div className="project-card__image-wrap">
                    <div className="project-card__image-frame">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="project-card__image"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="project-card__content">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-card__summary">{project.summary}</p>
                    <p className="project-highlight">{project.highlight}</p>

                    <div className="tag-list">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="tag">
                          {technology}
                        </span>
                      ))}
                    </div>

                    <a
                      className="project-card__link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver no GitHub
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
