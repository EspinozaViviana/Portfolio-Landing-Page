import React from "react";
import "./Home.css";
import bg from "../../assests/bg.png";
import facebook from "../../assests/facebook.png";
import instagram from "../../assests/instagram.png";
import linkedin from "../../assests/linkedin.png";
import gmail from "../../assests/gmail.png";

const Home = () => {
    return(
        <section id="home">
            <div className="homeContent">
             <span className="hello">I'm</span>
             <span className="homeName">Martina</span>
             <span className="homeText">Web Designer</span>
             <p className="homePara">Hello, I'm Martina, I'm a web designer with some years <br/> 
             of work experience.I seek to improve myself, grow an<br/>be productive in my workplace.</p>
             <div className="homeLinks">
                        <img src={facebook} alt="facebook" className="homeLink"/>
                        <img src={instagram} alt="instagram" className="homeLink"/>
                        <img src={linkedin} alt="linkedin" className="homeLink"/>
                        <img src={gmail} alt="gmail" className="homeLink"/>
                    </div>
           <img src={bg} alt="Profile" className="bg"/>
             
             
             
             </div>
             
        </section>
    );
};

export default Home;


