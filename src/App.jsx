import React, { useEffect } from "react";

import "./App.scss";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import "./utils/i18n";
import AnimatedCursor from "react-animated-cursor";
import Parallax from "./Parallax/Parallax";
import Touch from "./sections/Touch/Touch";

function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        const scrollSnapType = getComputedStyle(
          document.documentElement
        ).scrollSnapType;
        if (scrollSnapType.includes("mandatory")) {
          const scrollAmount =
            event.deltaY > 0 ? window.innerHeight : -window.innerHeight;
          window.scrollBy({
            top: scrollAmount,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color="202, 202, 202"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <section id="hero">
        <Hero />
      </section>

      <section id="parallax">
        <Parallax />
      </section>

      {/*<section id="skills">
        <Skills />
      </section>*/}

      {/*<section id="portfolio">*/}
      <Portfolio />
      {/*</section>*/}

      <section id="contact">
        <Contact />
      </section>

      <section id="touch">
        <Touch />
      </section>
      {/*
      <section id="footer">
        <Footer />
      </section>*/}
    </>
  );
}

export default App;
