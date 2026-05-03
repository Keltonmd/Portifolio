import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useState } from "react";
import { navigationItems } from "../data/siteContent";

type NavigationProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          )[0];

        if (!visibleEntry) {
          return;
        }

        const nextId = visibleEntry.target.id;
        setActiveId(nextId);

        if (window.location.hash !== `#${nextId}`) {
          window.history.replaceState(null, "", `#${nextId}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncScrollState = () => setIsScrolled(window.scrollY > 24);

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const id = window.location.hash.replace("#", "");
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const timeout = window.setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }, 120);

    return () => window.clearTimeout(timeout);
  }, []);

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-navigation${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-navigation__inner">
        <button
          className="site-navigation__brand"
          type="button"
          onClick={() => navigateTo("home")}
          aria-label="Voltar para o início"
        >
          <span className="site-navigation__brand-mark">KM</span>
          <span className="site-navigation__brand-copy">
            <strong>Kelton Martins</strong>
            <small>Dev Full Stack</small>
          </span>
        </button>

        <button
          className="site-navigation__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          Menu
        </button>

        <div
          id="site-navigation-menu"
          className={`site-navigation__menu${isMenuOpen ? " is-open" : ""}`}
        >
          <nav aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`site-navigation__link${
                  activeId === item.id ? " is-active" : ""
                }`}
                aria-pressed={activeId === item.id}
                onClick={() => navigateTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="site-navigation__theme"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
            }
          >
            {theme === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
          </button>

          <button
            type="button"
            className="button button--primary site-navigation__cta"
            onClick={() => navigateTo("contact")}
          >
            Falar sobre um projeto
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
