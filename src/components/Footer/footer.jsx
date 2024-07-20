import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-title">Ishaan</div>
                <p>A BCA student with a deep passion for AI, software development, and web technologies</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <p><FontAwesomeIcon icon={faUser} /></p>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2024 Ishaan Kumar. All Rights Reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;