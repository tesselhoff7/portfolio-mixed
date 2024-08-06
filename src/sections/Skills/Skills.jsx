import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./SkillsStyles.scss";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="skills">
      <motion.div className="logo" id="angular">
        Angular
      </motion.div>
      <motion.div className="logo" id="css">
        Css
      </motion.div>
      <motion.div className="logo" id="git">
        Git
      </motion.div>
      <motion.div className="logo" id="html">
        Html
      </motion.div>
      <motion.div className="logo" id="javascript">
        JavaScript
      </motion.div>
      <motion.div className="logo" id="react">
        React
      </motion.div>
      <motion.div className="logo" id="ts">
        Ts
      </motion.div>
    </section>
  );
}

export default Skills;

{
  /*<div className={styles.skillList}>*/
}
{
  /*<div className="skills-container">
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
          <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Angular" />
          <SkillList src={checkMarkIcon} skill="Vue" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Redux" />
          <SkillList src={checkMarkIcon} skill="Webpack" />
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Jest" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>*/
}
{
  /*</div>*/
}
