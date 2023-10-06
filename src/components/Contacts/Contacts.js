import React, { useRef } from "react";
import "./Contacts.css";
import facebook from "../../assests/facebook.png";
import instagram from "../../assests/instagram.png";
import linkedin from "../../assests/linkedin.png";
import gmail from "../../assests/gmail.png";
import emailjs from '@emailjs/browser';


const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bo3mxby', 'template_t3n8cpq', form.current, 'oY_Dk35DDS-M6fWQn4Vww')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      
    return (
        <section id="clientPage" >
            
            <div id="contact">
               <h1 className="contactPageTitle">Lets Design Together</h1> 
               <span className="constactDes"> Please fill out form below to discuss any work opportunities.<br/>
               Contact me to clarify doubts, exchange opinions or help you</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                  <input type="text" className="name" placeholder="Your Name" name="your_name"></input>
                  <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
                  <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>                
               </form>
                  <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebook} alt="facebook" className="link"/>
                        <img src={instagram} alt="instagram" className="link"/>
                        <img src={linkedin} alt="linkedin" className="link"/>
                        <img src={gmail} alt="gmail" className="link"/>
                    </div>
            </div>
        </section>
    );
};

export default Contacts;

