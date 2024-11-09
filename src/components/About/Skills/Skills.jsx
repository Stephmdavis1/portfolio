import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/ProjectsDataImages/About/icons/html.png";
import img2 from "../../../assets/ProjectsDataImages/About/icons/css.png";
import img3 from "../../../assets/ProjectsDataImages/About/icons/js.png";
import img4 from "../../../assets/ProjectsDataImages/About/icons/science.png";
import img5 from "../../../assets/ProjectsDataImages/About/icons/node-js.png";
import img6 from "../../../assets/ProjectsDataImages/About/icons/figma.png";
import img7 from "../../../assets/ProjectsDataImages/About/icons/next.png";
import img8 from "../../../assets/ProjectsDataImages/About/icons/tailwind.png";
import img9 from "../../../assets/ProjectsDataImages/About/icons/gatsby.png";
import img10 from "../../../assets/ProjectsDataImages/About/icons/programming.png";
import img11 from "../../../assets/ProjectsDataImages/About/icons/market-research.png";
import img12 from "../../../assets/ProjectsDataImages/About/icons/git.png";
import img13 from "../../../assets/ProjectsDataImages/About/icons/code.png";
import img14 from "../../../assets/ProjectsDataImages/About/icons/visual-studio.png";
import img15 from "../../../assets/ProjectsDataImages/About/icons/adobe.png";
import img16 from "../../../assets/ProjectsDataImages/About/icons/firebase.png";
import img17 from "../../../assets/ProjectsDataImages/About/icons/responsive-design.png";
import "./Skills.css";

const Skill = ({ name, x, y, img }) => {
  return (
    <motion.div
      className="skill_component"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <img src={img} alt="" className="icon" />
      <p className="icon_text">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      {/* <div className="skills__container"> */}
        <h2 className="skills__header">Skills</h2>
        <h5 className="skills__copy">My Toolbox & Things I Can Do</h5>
        <div className="icons__container_desktop">
          <Skill name="HTML" x="-5vw" y="-15vw" img={img1} />
          <Skill name="CSS" x="5vw" y="-15vw" img={img2} />
          <Skill name="ReactJS" x="15vw" y="-15vw" img={img4} />
          <Skill name="NodeJS" x="25vw" y="-15vw" img={img5} />
          <Skill name="NextJS" x="35vw" y="-15vw" img={img7} />
          <Skill name="JavaScript" x="45vw" y="-15vw" img={img3} />

          <Skill name="Tailwind" x="-18vw" y="-5vw" img={img8} />
          <Skill name="Figma" x="-8vw" y="-5vw" img={img6} />
          <Skill name="Gatsby" x="2vw" y="-5vw" img={img9} />
          <Skill name="Web Design" x="12vw" y="-5vw" img={img10} />
          <Skill name="Researching" x="22vw" y="-5vw" img={img11} />

          <Skill name="Git" x="-41vw" y="6vw" img={img12} />
          <Skill name="VS Code" x="-31vw" y="6vw" img={img14} />
          <Skill name="Adobe Studio" x="-21vw" y="6vw" img={img15} />
          <Skill name="Github" x="-11vw" y="6vw" img={img13} />
          <Skill name="Firebase" x="-1vw" y="6vw" img={img16} />
          <Skill name="Responsive Design" x="9vw" y="6vw" img={img17} />
        </div>
        <div className="icons__container_mobile">
          <div className="mobileicons">
          <Skill name="HTML" img={img1} />
          <Skill name="CSS"  img={img2} />
          <Skill name="ReactJS"  img={img4} />
          <Skill name="NodeJS"  img={img5} />
          <Skill name="NextJS"  img={img7} />
          <Skill name="JavaScript"  img={img3} />
          </div>
          <div className="mobileicons">
          <Skill name="Tailwind"  img={img8} />
          <Skill name="Figma" img={img6} />
          <Skill name="Gatsby"  img={img9} />
          <Skill name="Web Design"  img={img10} />
          <Skill name="Researching"  img={img11} />
          </div>
          <div className="mobileicons">
          <Skill name="Git" img={img12} />
          <Skill name="VS Code" img={img14} />
          <Skill name="Adobe Studio"  img={img15} />
          <Skill name="Github"  img={img13} />
          <Skill name="Firebase"  img={img16} />
          <Skill name="Responsive Design"  img={img17} />
          </div>
        </div>
        <div className="skills__next">
          <h5 className="skills_next_header">Currently Working On:</h5>
          <p className="">
            I'm playing around with Python and incorporating more backend into my projects.
          </p>
        </div>
      {/* </div> */}
    </>
  );
};

export default Skills;
