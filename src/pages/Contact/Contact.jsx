import React, { useEffect, useState } from "react";
import Style from "../../css/contact.module.css";
import Socials from "./Socials";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <section>
        <section className={Style.contactSection} id="contact">
          <div className={Style.contactCard}>
            <div className={Style.left}>
              <div className={Style.leftTitle}>Contact Me</div>
              <div className={Style.leftSubTitle}>with other platforms</div>
              <Socials />
            </div>
            <div className={Style.right}>
              <div className={Style.rightTitle}>Contact Form</div>
              <form action="" className={Style.form} onSubmit={handleSubmit}>
                <ToastContainer theme="dark" style={{ top: "80px" }} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
                <button type="submit" className={Style.contactButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
