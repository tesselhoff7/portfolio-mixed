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

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <div className="inner-container">
          <img
            src={heroImg}
            className="hero"
            alt="Profile picture of Harris Johnsen"
          />
          <div className="inner-btns">
            <img
              className="colorMode"
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
            />
            <span>ENG</span>
            <span>KR</span>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>
          Pak
          <br />
          Viacheslav
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
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
            <div class="btn-4" data-tooltip="Size: 20Mb">
              <div class="button-wrapper">
                <div class="text">Download</div>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          <a href={resume_kr} download className="download-resume">
            <div class="btn-4" data-tooltip="Size: 20Mb">
              <div class="button-wrapper">
                <div class="text">Download</div>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
