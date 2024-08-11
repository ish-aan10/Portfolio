import React, { useEffect, useState } from "react";
import "./portfolio.css";
import projects_data from "../../assets/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    const [projects] = useState(projects_data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = projects.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, projects]);

    useEffect(() => {
        let slider = setInterval(() => {
           setIndex(index+1) 
        }, 5000);
        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <div id="portfolio" className="portfolio">
            <div className="portfolio-title border-gd border-gd-green">
                <h1>Portfolio</h1>
            </div>
            <p className="portfolio-para">Check out my projects showcasing innovative web development and design solutions.</p>
            <div className="mywork-container">
                {projects.map((item, indexProject) => {
                    const {p_id, p_name, p_img, p_description, p_link} = item;

                    let position = "nextSlide";
                    if (indexProject === index) {
                        position = "activeSlide";
                    }
                    if (indexProject === index-1 || (index === 0 && indexProject === projects.length-1)) {
                        position = "lastSlide";
                    }
                    return (
                        <section className={position} key={p_id}>
                            <img src={p_img} alt={p_name} />
                            <div className="project-details">
                                <h2>{p_name}</h2>
                                <p>{p_description}</p>
                                <a href={p_link}>
                                    View Project 
                                </a>
                            </div>
                        </section>
                    );
                })}
            </div>
            <div className="button-cont">
                <button className="prev" onClick={() => setIndex(index - 1)}>
                        <i><FontAwesomeIcon icon={faArrowLeft}/></i>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                        <i><FontAwesomeIcon icon={faArrowRight}/></i>
                </button>
            </div>
            <div className="mywork-showmore">
                <a href="https://github.com/ish-aan10?tab=repositories">show more <FontAwesomeIcon icon={faArrowRight} /> </a>
            </div>
        </div>
    );
}

export default Portfolio;