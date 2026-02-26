import { useState, useCallback } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * App — root component.
 * Manages theme state and renders all sections.
 */
export default function App() {
  /* ---- Theme ---- */
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch {
        /* storage unavailable — ignore */
      }
      return next;
    });
  }, []);

  /* ---- Loader ---- */
  const [loading, setLoading] = useState(true);
  const handleLoaderFinish = useCallback(() => setLoading(false), []);

  return (
    <div id="app-wrapper" data-theme={theme}>
      {loading && <Loader onFinish={handleLoaderFinish} />}

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
