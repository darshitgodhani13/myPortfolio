import React from "react";
import expresImg from "../assets/img/express.png";
import mongodbImg from "../assets/img/mongodb.png";
import tailwindCss from "../assets/img/tilwind.svg";
import typescript from "../assets/img/typescript.png";
import nectJs from "../assets/img/next.svg";
const Skills = () => {
  const frontEndSkills = [
    { icon: "bx bxl-html5", name: "HTML5" },
    { icon: "bx bxl-css3", name: "CSS3" },
    { icon: "custom-icon", name: "Tailwind CSS", imgSrc: tailwindCss },
    { icon: "bx bxl-javascript", name: "JavaScript" },
    { icon: "custom-icon", name: "Typescript", imgSrc: typescript },
    { icon: "bx bxl-react", name: "React Js" },
    { icon: "custom-icon", name: "Next Js", imgSrc: nectJs },
    { icon: "bx bxl-redux", name: "Redux" },
    { icon: "bx bxs-paint", name: "Material-UI" },
  ];

  const backEndSkills = [
    { icon: "custom-icon", name: "Express.js", imgSrc: expresImg },
    { icon: "bx bxl-nodejs", name: "Node.js" },
    { icon: "custom-icon", name: "MongoDB", imgSrc: mongodbImg },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container bd-grid">
        <div>
          <h2 className="skills-subtitle">Front-end Skills</h2>
          {frontEndSkills.map((skill, index) => (
            <div className="skills-data" key={index}>
              <div className="skills-names">
                {skill.icon === "custom-icon" ? (
                  <img className="skills-icon" src={skill.imgSrc} alt="" />
                ) : (
                  <i className={`${skill.icon} skills-icon`}></i>
                )}
                <span className="skills-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="skills-subtitle">Back-end Skills</h2>
          {backEndSkills.map((skill, index) => (
            <div className="skills-data" key={index}>
              <div className="skills-names">
                {skill.icon === "custom-icon" ? (
                  <img className="skills-icon" src={skill.imgSrc} alt="" />
                ) : (
                  <i className={`${skill.icon} skills-icon`}></i>
                )}
                <span className="skills-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
