import React from "react";
import { Divider } from "../../components";
import "../../css/About.css";

const Experience = ({ ...props }) => {
  return (
    <>
      <section className="experience" {...props} data-aos="fade-up">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Experience</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <Divider />
        <div className="experienceContainer">
          <div className="experienceCard">
            <div className="cardTitle">
              Project
              <br /> Completed
            </div>
            <div className="cardSubTitle">30+</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Number of reports on
              <br />Standoff 365
            </div>
            <div className="cardSubTitle">6+</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Earned on
              <br /> vulnerabilities
            </div>
            <div className="cardSubTitle">100 000+ rubles</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Years of
              <br /> Experience
            </div>
            <div className="cardSubTitle">5+</div>
          </div>
        </div>
        <Divider />
      </section>
    </>
  );
};

export default Experience;
