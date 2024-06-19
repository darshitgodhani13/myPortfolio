import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";
const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 800,
      reset: true,
    });

    sr.reveal(".home-title", {});
    sr.reveal(".button", { delay: 50 });
    sr.reveal(".home-img", { delay: 100 });
    sr.reveal(".home-social-icon", { interval: 70 });

    sr.reveal(".about-subtitle", { delay: 100 });
    sr.reveal(".about-text", { delay: 100 });

    sr.reveal(".skills-subtitle", {});
    sr.reveal(".skills-data", { interval: 60 });

    // sr.reveal(".project-img", { interval: 0 });
  }, []);

  return (
    <div>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
