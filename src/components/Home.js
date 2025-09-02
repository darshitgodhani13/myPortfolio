import React from "react";
import homeImg from "../assets/img/Scrollimg.png";
import resume from "../assets/Darshit-Reactjs.pdf";

const Home = () => {
  return (
    <div className="homeMainDiv">
      <section className="home bd-grid section" id="home">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="home-data">
            <h2 className="home-title">
              I Am
              <br />
              <span className="home-title-color Baloo">Darshit Godhani</span>
              <br />
              <span className="animate-charcter">Web Developer</span>
            </h2>

            <a href={resume} target="_blank" className="button">
              Resume
            </a>
          </div>
          <div className="home-img">
            <img src={homeImg} alt="myzulfiqarIMG" className="myimage" />
          </div>
        </div>

        <div className="home-social">
          <a
            href="https://www.linkedin.com/in/darshit-godhani-2a717023b/"
            target="_blank"
            className="home-social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          {/* <a href="https://github.com/ZulfiqarG" target="_blank" className="home-social-icon"><i className="bx bxl-github"></i></a> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
