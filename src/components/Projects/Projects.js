import React from "react";
import "./Projects.css";
import portfolio1 from "../../assests/portfolio1.jpg";
import portfolio2 from "../../assests/portfolio2.jpg";
import portfolio3 from "../../assests/portfolio3.jpg";
//import portfolio4 from "../../assests/portfolio4.jpg";
//import portfolio5 from "../../assests/portfolio5.jpg";
//import portfolio6 from "../../assests/portfolio6.jpg";


const Projects = () => {
    return (
        <section id="projects">
          <h2 className="projectsTitle"> My Projects - Skills</h2>
          <span className="projectsDesc">I pride myself on paying attention to every detail, seeking effectiveness and <br/> efficiency without losing sight of what surrounds us.</span>
            <div className="projectsImgs">
                <img src={portfolio1} alt="" className="projectsImg"/>
                <img src={portfolio2} alt="" className="projectsImg"/>
                <img src={portfolio3} alt="" className="projectsImg"/>
                
            </div>
            <div class="skills container">
                <div class="row skills-content">
                  <div class="col-lg-6">
                        <div class="progress">
                        <span class="skill">HTML <i class="val">100%</i></span>
                            <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">CSS <i class="val">90%</i></span>
                            <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">JavaScript <i class="val">75%</i></span>
                            <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                   </div>

                    <div class="col-lg-6">

                        <div class="progress">
                            <span class="skill">PHP <i class="val">80%</i></span>
                            <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                            <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    );
};

export default Projects;

/* <img src={portfolio4} alt="" className="projectsImg"/>
                <img src={portfolio5} alt="" className="projectsImg"/>
                <img src={portfolio6} alt="" className="projectsImg"/>*/