import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ImTelegram } from "react-icons/im";
import Style from "../../css/socials.module.css";

const Socials = () => {
  const socials = [
    {
      name: "Telegram",
      icon: <ImTelegram />,
      link: "https://t.me/zelenka_lzt_team",
      message: "Telegram",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:dandomiplay1@gmail.com",
      message: "dandomiplay1@gmail.com",
    }
  ];

  return (
    <div className={Style.socials}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={Style.socialIcon} data-social={social.name}>
            {social.icon}
          </div>
          <div className={Style.socialName}>{social.message}</div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
