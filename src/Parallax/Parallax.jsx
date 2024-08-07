// Parallax.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Parallax.scss";

import Angular from "../assets/logos/Angular.png";
import Css from "../assets/logos/Css.png";
import Html from "../assets/logos/Html.png";
import JS from "../assets/logos/JS.png";
import ReactLogo from "../assets/logos/React.png";
import Ts from "../assets/logos/Ts.png";

const ParallaxItem = ({ image, text, direction }) => {
  const { ref, inView } = useInView({
    //threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`parallax-item ${
        inView ? "in-view" : "out-view"
      } ${direction}`}
    >
      {image ? <img src={image} alt={text} className="parallax-image" /> : null}
      <p className="parallax-text">{text}</p>
    </div>
  );
};

const Parallax = () => {
  const rows = [
    {
      direction: "left",
      items: [
        { image: Html, text: "HTML" },
        { image: Css, text: "CSS" },
        { image: JS, text: "JavaScript" },
        { image: Ts, text: "TypeScript" },
      ],
    },
    {
      direction: "right",
      items: [
        { image: ReactLogo, text: "React" },
        { image: ReactLogo, text: "React Native" },
        { image: Angular, text: "Angular" },
      ],
    },
    {
      direction: "right",
      items: [
        { text: "Git" },
        { text: "Github" },
        { text: "Gitlab" },
        { text: "Jira" },
        { text: "Confluence" },
        { text: "Bitbucket" },
      ],
    },
  ];

  return (
    <div className="parallax-container">
      <h1 className="parralax-title">Skills</h1>
      <div className="rows-container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="parallax-row">
            {row.items.map((item, itemIndex) => (
              <ParallaxItem
                key={itemIndex}
                image={item.image}
                text={item.text}
                direction={row.direction}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
