import React from "react";
import "./about.css";
import slider_img_1 from "../../assets/slider-1.jpg";
import slider_img_2 from "../../assets/slider-2.jpg";
import slider_img_3 from "../../assets/slider-3.jpg";
import slider_img_4 from "../../assets/slider-4.jpg";
import slider_img_5 from "../../assets/slider-5.jpg";


const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title border-gd border-gd-green">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <div className="image-container">
                    <div className="slider one">
                        <img src={slider_img_1} alt="" />
                    </div>
                    <div className="slider two">
                        <img src={slider_img_2} alt="" />
                    </div>
                    <div className="slider three">
                        <img src={slider_img_3} alt="" />
                    </div>
                    <div className="slider four">
                        <img src={slider_img_4} alt="" />
                    </div>
                    <div className="slider five">
                        <img src={slider_img_5} alt="" />
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Ishaan Kumar, a fresher from Jamshedpur, Jharkhand, with a Bachelor in Computer Application from Arka Jain University. I have technical skills in programming languages such as Python and Java, and I'm proficient in web development using HTML, CSS, and JavaScript.</p>

                    <p>In my free time, I enjoy staying fit through regular exercise and exploring various fitness regimes. I have a passion for fine arts, where I express my creativity through painting and drawing. Listening to music is one of my favorite pastimes, and I enjoy discovering new genres and artists. I am also an avid gamer, appreciating the strategy and storytelling in video games. Additionally, I love cooking and experimenting with new recipes, finding joy in creating delicious meals.</p>
                </div>
                <div className="about-skills">
                    <div className="skills-title">My Skills</div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{ width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{ width:"85%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React.js</p>
                        <hr  style={{ width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>SQL</p>
                        <hr  style={{ width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p>
                        <hr  style={{ width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java</p>
                        <hr  style={{ width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>C/C++</p>
                        <hr style={{ width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git/Github</p>
                        <hr style={{ width:"65%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="quote">
            <p>"It's not who you are underneath, it's what you do that defines you".</p>
        </div>
    </div>
  );
}

export default About;