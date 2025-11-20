import React from "react";
import bearishos from "../assets/img/bearishos.png";
import jumboCareer from "../assets/img/jumbocareer.png";
import amarCms from "../assets/img/amarcms.png";
import cycleVita from "../assets/img/cyclevita.png";
import hisurat from "../assets/img/hisurat.png";
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
    },
    {
      title: "Prism",
      imgSrc: "Prism",
      description: "An internet service provider customer review and data analysis webapplication",
    },
    {
      title: "Hisurat",
      imgSrc: hisurat,
      description: "Discover Surat events, businesses, explore places, and book tickets online",
      githubLink: "https://www.hisurat.com/"
    }
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
