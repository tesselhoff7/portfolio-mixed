import React, { useEffect, useState } from "react";
import "./HeroStyles.scss";
import heroImg from "../../assets/hero-img5.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import resume_eng from "../../assets/resume_eng.pdf";
import resume_kr from "../../assets/resume_kr.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTranslation } from "react-i18next";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const { t, i18n } = useTranslation();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const [engFileSize, setEngFileSize] = useState("Calculating...");
  const [krFileSize, setKrFileSize] = useState("Calculating...");

  useEffect(() => {
    const fetchFileSize = async (url, setSize) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
          const size = response.headers.get("content-length");
          if (size) {
            const sizeInBytes = parseInt(size, 10);
            if (sizeInBytes < 1024 * 1024) {
              const sizeInKB = (sizeInBytes / 1024).toFixed(2);
              setSize(`Size: ${sizeInKB} KB`);
            } else {
              const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
              setSize(`Size: ${sizeInMB} MB`);
            }
          } else {
            setSize("Size: Unknown");
          }
        } else {
          setSize("Size: Unknown");
        }
      } catch (error) {
        setSize("Size: Unknown");
      }
    };

    fetchFileSize(resume_eng, setEngFileSize);
    fetchFileSize(resume_kr, setKrFileSize);

    const root = document.getElementById("lang-version");

    if (root) {
      root.className = "en";
    }
  }, []);

  const getTranslation = (key) => {
    const translated = t(key);
    return translated === key ? "" : translated;
  };

  const toggleLanguage = (lang) => {
    console.log("LANG = ===", lang);
    const root = document.getElementById("lang-version");
    i18n.changeLanguage(lang);

    if (root) {
      root.className = lang;
    }
  };

  const test = () => {
    const root = document.getElementById("lang-version");

    root.className = "test";
  };

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <div className="inner-container">
          <img
            src={heroImg}
            className="hero"
            alt="Profile picture of Harris Johnsen"
          />
          {/*<div className="inner-btns">
            <button className="hidden-btn">
              <img
                className="colorMode"
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
              />
            </button>
            <button
              className="language-switch eng"
              onClick={() => toggleLanguage("en")}
            >
              <p>ENG</p>
            </button>
            <button
              className="language-switch kr"
              onClick={() => toggleLanguage("kr")}
            >
              <p>KR</p>
            </button>
          </div>*/}
        </div>
      </div>
      <div className="info">
        <h1>
          {getTranslation("firstName")}
          <br />
          {t("lastName")}
        </h1>
        <h2>{t("jobTitle")}</h2>
        <span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="description">
          Front End Web Developer with a keen eye for creating intuitive,
          interactive and engaging user interfaces. Detail-oriented and always
          eager to learn and adapt to new technologies to bring innovative
          solutions to life.
        </p>
        <div className="resume-btns">
          <a href={resume_eng} download className="download-resume">
            <div className="btn-4" data-tooltip={engFileSize}>
              <div className="button-wrapper">
                <div className="text">ENG</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="44px"
                    height="44px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          <a href={resume_kr} download className="download-resume">
            <div className="btn-4" data-tooltip={krFileSize}>
              <div className="button-wrapper">
                <div className="text">KR</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="44px"
                    height="44px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
