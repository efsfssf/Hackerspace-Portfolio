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
          Hello, my nickname is Dandomi and I am an experienced developer specializing in building high quality and reliable software solutions. With a deep understanding of C# and the MVVM architectural pattern, I strive to build intuitive and scalable applications. My experience includes working with Python, JavaScript, and contributing to projects in Java, PHP, TypeScript, and Kotlin.
However, my passion is not limited to development. I am also active in finding vulnerabilities in software and web resources, which makes me not only a developer but also an ethical hacker. My cybersecurity efforts have resulted in over 6 high level vulnerability reports on the Standoff 365 platform, which emphasizes my dedication to protecting data and systems.
With me, you won't just get code, but a valuable partner ready to take responsibility for the security and efficiency of your software products.
        </div>
      </div>

      <div className="aboutContent">
        <div className="aboutText">
          <p>
            Hello, my nickname is Dandomi and I am an experienced developer specializing in building high quality and reliable software solutions. With a deep understanding of C# and the MVVM architectural pattern, I strive to build intuitive and scalable applications. My experience includes working with Python, JavaScript, and contributing to projects in Java, PHP, TypeScript, and Kotlin.
However, my passion is not limited to development. I am also active in finding vulnerabilities in software and web resources, which makes me not only a developer but also an ethical hacker. My cybersecurity efforts have resulted in over 6 high level vulnerability reports on the Standoff 365 platform, which emphasizes my dedication to protecting data and systems.
With me, you won't just get code, but a valuable partner ready to take responsibility for the security and efficiency of your software products.
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
