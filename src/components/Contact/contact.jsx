import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "52c1d9c8-1e64-4d77-bd9b-e41cd0ff1aa4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="contact-title border-gd border-gd-green">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send message about anything you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <p> ishaankumar1007@gmail.com </p>
                        </div>
                        <div className="contact-detail">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <p> +91 6206883451 </p>
                        </div>
                        <div className="contact-detail">
                            <span><FontAwesomeIcon icon={faMapMarked} /></span>
                            <p> Jamshedpur, Jharkhand, IN </p>
                        </div>
                        
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your Message Here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;