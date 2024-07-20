import React from "react";
import "./portfolio.css";
import projects_data from "../../assets/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
        <div className="portfolio-title border-gd border-gd-green">
            <h1>Portfolio</h1>
        </div>
        <div className="mywork-container">
            {projects_data.map((project, index) => {
                return <img key={index} src={project.p_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>show more <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
    </div>
  )
}

export default Portfolio;