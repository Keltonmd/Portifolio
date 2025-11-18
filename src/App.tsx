import { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import History from "./pages/History";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import "./styles/index.scss";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      
      <Navigation
        parentToChild={{ mode }}
        modeChange={handleModeChange}
      />

      <FadeIn transitionDuration={700}>
        <Home />
        <Skills />
        <History />
        <Project />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
