import React from "react";
import "./hero.css";
import profile_img from "../../assets/profile_image.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>Hello!<br /><span>I'm Ishaan Kumar,</span></h1>
      <p>A BCA student with a deep passion for AI, software development, and web technologies. My journey in the tech world is driven by a relentless curiosity and a desire to innovate and create impactful solutions.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
        </div>
        <a className="hero-resume" href="Ishaan Kumar Resume.pdf" download="Ishaan_CV.pdf">Download CV <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
      <div className="hero-socials">
          <a href="https://github.com/ish-aan10" className="social-links"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com/__ish_aan10__/" className="social-links"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/ishaan-kumar-214004239/" className="social-links"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  )
}

export default Hero;