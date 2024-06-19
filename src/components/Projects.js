import React from "react";
import bearishos from "../assets/img/bearishos.png";
import jumboCareer from "../assets/img/jumbocareer.png";
import amarCms from "../assets/img/amarcms.png";
import cycleVita from "../assets/img/cyclevita.png";
import cookandBoadrman from "../assets/img/cookandboardman.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Bearish OS",
      imgSrc: bearishos,
      description: "Converge your business under a single Work OS",
      githubLink: "https://www.bearishos.com/",
    },
    {
      title: "Jumbo Career",
      imgSrc: jumboCareer,
      description: "Learning plateform webplication",
      githubLink:
        "https://tejedtech1-154623-react.b154623.dev.eastus.az.svc.builder.cafe/",
    },
    {
      title: "Amar Company",
      imgSrc: amarCms,
      description: "Pharma coumpany stock managment webaplication",
      githubLink:"https://amar.samvartaka.com/"
    },
    {
      title: "Cook and Boardman poack details",
      imgSrc: cookandBoadrman,
      description: "Distributors and Wholesale data management webapplication",
    },
    {
      title: "Cycle Vita PKU",
      imgSrc: cycleVita,
      description:
        "Pharma coumpny medicinn and daialye report and medicine webapplication",
      githubLink:
        "https://cyclevitaapp-461331-react.b461331.dev.eastus.az.svc.builder.cafe/",
    },
  ];

  const navigetPage = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container bd-grid">
        {projects.map((project, index) => (
          <div
            className="project"
            key={index}
            onClick={() => navigetPage(project.githubLink)}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="project-img"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
