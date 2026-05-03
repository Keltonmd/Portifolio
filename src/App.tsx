import { useEffect, useState } from "react";
import { Navigation, Footer } from "./components";
import { Contact, History, Home, Project, Skills } from "./pages";

import "./styles/index.scss";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`app-shell theme-${theme}`}>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>

      <Navigation
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />

      <main id="main-content" className="main-content">
        <Home />
        <Skills />
        <History />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
