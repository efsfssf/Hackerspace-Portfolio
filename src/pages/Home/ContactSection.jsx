import React from "react";
import "../../css/AboutSection.css";
import "../../css/contactSection.css";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { SiOpenbugbounty } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTitle } from "../../features/navSlice";

const ContactSection = ({ ...props }) => {
  return (
    <>
      <section className="contactSection" {...props} data-aos="fade-up">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Connect Me</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="contactContainer">
          <a
            className="circleIcon"
            data-icon="twitter"
            href="https://standoff365.com/profile/Dandomi/"
            target="_blank"
          >
            <SiOpenbugbounty />
          </a>
          <a
            className="circleIcon"
            data-icon="linkedin"
            href="https://t.me/zelenka_lzt_team"
            target="_blank"
          >
            <ImTelegram />
          </a>
          <Link className="circleIcon" data-icon="mail" to="/contact">
            <IoMdMail />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
