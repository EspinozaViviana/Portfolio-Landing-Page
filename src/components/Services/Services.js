import React from "react";
import "./Services.css";
import uxui from  "../../assests/uxui.png";
import webdesign from  "../../assests/webdesign.png";
import appdesign from  "../../assests/appdesign.png";
//import ux from  "../../assests/ux.png";

const Services = () => {
    return (
        <section id="services">
          <span className="servicesTitle">Services</span>
          <span className="servicesDesc">I am passionate about programming, I ventured into several areas and decided to dedicate myself to design.</span>
            <div className="servicesBars">
                <div className="servicesBar">
                  <img src={uxui} alt="uxui" className="servicesBarImg"/>
                   <div className="servicesBarText">
                      <h2>UX/UI</h2>
                      <p>I am passionate about programming, 
                       I ventured into several areas and decided 
                       to dedicate myself to design.</p>
                   </div>
               </div>
               <div className="servicesBar">
                  <img src={webdesign} alt="webdesign" className="servicesBarImg"/>
                    <div className="servicesBarText">
                     <h2>Web Design</h2>
                      <p>I am passionate about programming, I ventured into several areas and decided to dedicate myself to design.</p>
                    </div>
                </div>
                <div className="servicesBar">
                  <img src={appdesign} alt="design" className="servicesBarImg"/>
                    <div className="servicesBarText">
                     <h2>App Design</h2>
                      <p>I am passionate about programming, I ventured into several 
                       areas and decided to dedicate myself to design.</p>
                   </div>
                </div>
            </div>    
        </section>
    );
};

export default Services;

/* 
<div className="servicesBar">
              <img src={ux} alt="ux" className="servicesBarImg"/>
                <div className="servicesBarText">
                  <h2>UI</h2>
                  <p>I am passionate about programming, 
                    I ventured into several areas and decided to 
                    dedicate myself to design.</p>
                </div>
            </div>*/