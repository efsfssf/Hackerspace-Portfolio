import React from "react";
import "../../css/About.css";
import { journey } from "../../data";

const Journey = ({ ...props }) => {
  return (
    <section className="journey" {...props}>
      <div className="titleContainer" data-aos="fade-up">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Hacking</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutDescription" data-aos="fade-up">
        Specializing in cybersecurity, I focus my efforts on finding and documenting vulnerabilities in large companies' information systems. Using advanced techniques and tools, I identify weaknesses in companies' defenses. Over the course of my work, I have created over 6 detailed vulnerability reports, most of which are categorized as high level. I utilize the Standoff 365 platform to report vulnerabilities found, thereby securing companies' data and operations. My goal is to improve defense and security. I provide information that allows companies to respond to potential threats in a timely manner.
My contribution in the field of cybersecurity helps prevent potential incidents of data breaches and other forms of cyberattacks, thereby increasing trust and security in the digital space.
      </div>

      <div className="timeline">
        <div className="line"></div>
        <ul>
          {journey.map((item, index) => {
            return (
              <li key={index}>
                <div className="timeline-content">
                  <h3 className="date">{item.date}</h3>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Journey;
