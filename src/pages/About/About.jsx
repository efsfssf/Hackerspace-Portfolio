import { Button } from "../../components";
import "../../css/About.css";
import AboutSection from "../Home/AboutSection";
import Experience from "./Experience";
import Journey from "./Journey";
import MembersSection from "../Home/MembersSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectSection from "../Home/ProjectSection";

const About = ({ ...props }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section {...props}>
      <section className="About" id="about">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">About Us</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="aboutDescription" data-aos="fade-up">
          Hi. My nickname is Dandomi, and I'm an experienced developer with a wide range of skills. Here's a bit of information about my experience and accomplishments: Programming languages: C# (I am familiar with the MVVM model and have experience developing applications on the .NET platform.)
, Python (I use Python to automate tasks as well as develop web applications and analyze data.)
, JavaScript (I develop interactive web applications using frameworks such as React or Vue.js.)
, Java (I have created small projects in Java, including Android applications.)
, PHP (My PHP experience includes web development and database integration.)
, TypeScript (I use TypeScript to develop modern web applications.)
, Kotlin (I am familiar with Kotlin and have used it to develop Android applications.)          
Projects:
          Online store: I created an online store with a full sales cycle including a payment system via SBP (Tinkoff). This project included frontend, backend and integration with the payment system.
, Bot: I developed a bot that processes user requests and fulfills payment via SBP. This project demonstrates my skills in data processing and integration with external services.
        </div>
        <Journey id="journey" />
        <Experience id="experience" />
        <ProjectSection id="projects" />
      </section>
    </section>
  );
};

export default About;
