import { useState, useEffect } from "react";

import {
  Home,
  Skills,
  History,
  Project,
  Contact,
} from "./pages";

import {
  Navigation,
  Footer,
  FadeIn,
} from "./components";

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
