import React from "react";

import { Button } from "../../components";
import "../../css/AboutSection.css";
import { useDispatch } from "react-redux";
import { updateTitle } from "../../features/navSlice";

const AboutSection = ({ ...props }) => {
  return (
    <section className="about" {...props} data-aos="fade-up">
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">About Me</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>

      <div className="mob-aboutContent">
        <div>
Hi. I'm an experienced developer specializing in C# and MVVM, with experience in Python, JavaScript, Java, PHP, TypeScript, and Kotlin. I'm also an active software and web vulnerability researcher, with over 6 high-level vulnerability reports on the Standoff 365 platform. I am not just a developer, but a valued partner willing to take responsibility for the security and efficiency of your software products.
        </div>
      </div>

      <div className="aboutContent">
        <div className="aboutText">
          <p>
Hi Dandomi. I'm an experienced developer specializing in C# and MVVM, with experience in Python, JavaScript, Java, PHP, TypeScript, and Kotlin. I'm also an active software and web vulnerability researcher, with over 6 high-level vulnerability reports on the Standoff 365 platform. I am not just a developer, but a valued partner willing to take responsibility for the security and efficiency of your software products.
          </p>
        </div>
        <div className="aboutLogo"></div>
        <div className="aboutButton">
          <Button text="Learn More" to={"/about"} />
        </div>
      </div>
      <Button text="Learn More" to={"/about"} className="aboutSectionButton" />
    </section>
  );
};

export default AboutSection;
