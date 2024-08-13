import { motion } from "framer-motion";
import "./Links.scss";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Contact"];
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const themeIcon = theme === "light" ? sun : moon;

  const toggleLanguage = (lang) => {
    console.log("LANG = ===", lang);
    const root = document.getElementById("lang-version");
    i18n.changeLanguage(lang);

    if (root) {
      root.className = lang;
    }
  };
  //TODO: REFACTOR
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <motion.div className="settings-container" variants={variants}>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="theme-btn">
            <img
              className="colorMode"
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
            />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="language-switch eng"
            onClick={() => toggleLanguage("en")}
          >
            <p>ENG</p>
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="language-switch kr"
            onClick={() => toggleLanguage("kr")}
          >
            <p>KR</p>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Links;
