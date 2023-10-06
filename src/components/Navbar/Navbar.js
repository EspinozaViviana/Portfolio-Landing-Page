import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-scroll";
import logo from "../../assests/logo.png";
import menu1 from "../../assests/menu1.png";



const Navbar = () => {
  const[ showMenu, setShowMenu]=useState();
    return (
        <nav className="navbar">
          <img src={logo} alt="" className="logo" />
          
          <div className="desktopMenu">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopListItem">Home</Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopListItem">Services</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopListItem">Projects</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopListItem">Contacts</Link>
          </div>
          
          <button className="desktopMenuBtn" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});

          }}>Contact Me</button>

          <img src={menu1} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
          
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Services</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contacts</Link>
          </div>
        </nav>
    );
};

export default Navbar;

/* <img src={logo} alt="" className="logo" />*/