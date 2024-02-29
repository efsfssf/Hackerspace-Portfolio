
import React from 'react'


import { Button } from "../../components";
import "../../css/AboutSection.css";
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../features/navSlice';


const AboutSection = () => {
  const dispatch = useDispatch();
  const changeHeader = (path,number)=>{
    const newPath = {
      navTitle: path,
      navNumber: number
    }
    dispatch(updateTitle(newPath));
  }
  
  return (
    <section className="about">
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">About Us</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutContent">
        <div className="aboutText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="aboutLogo"></div>
        <div className="aboutButton">
          <Button text="Learn More" to={"/about"} onClick={()=>changeHeader("about","02")}/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
