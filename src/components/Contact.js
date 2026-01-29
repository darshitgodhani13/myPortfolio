import React from "react";

const Contact = () => {
  return (
    <section
      className="projects section contact"
      style={{ marginBottom: "150px" }}
      id="contact"
    >
      <h2 className="section-title">Contact</h2>

      <div className="details">
        <div className="details-sub-div">
          <span className="detail-item">
            <i className="bx bx-phone"></i> contact no
          </span>
          <span className="detail-item">
            <i className="bx bx-envelope"></i>
            Email
          </span>
          <span className="detail-item">
            <i className="bx bxl-linkedin-square"></i>
            LinkedIn
          </span>
        </div>

        <div className="details-sub-div">
          <span className="detail-item">:{"    "}+91 9033284839</span>
          <span className="detail-item">
            :{"    "}darshitgodhani13@gmail.com
          </span>
          <span className="detail-item">
            :{"    "}
            <a
              href="https://www.linkedin.com/in/darshit-godhani-2a717023b"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
