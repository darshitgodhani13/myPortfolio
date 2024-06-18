import React from "react";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-container bd-grid">
        <div>
          <h2 className="about-subtitle">My Awesome Skills</h2>
          <p className="about-text">
            Enthusiastic and hardworking Full Stack Web Developer with a passion
            for designing and developing user-friendly and responsive web
            applications. With a strong foundation in both front-end and
            back-end technologies, I bring ideas to life by seamlessly
            connecting the dots between design and functionality. My mission is
            to build user-friendly, efficient, and secure web applications that
            exceed expectations.
          </p>
          <br />
          <p>
            Drop a mail @ darshitgodhani13@gmail.com
            <i
              style={{
                color: "#4070f4",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
              className="bx bx-copy"
              id="copy"
              onClick={() => {
                navigator.clipboard.writeText("darshitgodhani13@gmail.com");
                document.getElementById("copy").innerHTML = "copied";
                setTimeout(() => {
                  document.getElementById("copy").innerHTML = null;
                }, 1000);
              }}
            ></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
