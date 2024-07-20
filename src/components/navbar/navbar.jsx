import React from "react";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const NavBar = () => {

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return ( 
        <div className="navbar">
            <a href="##" className="navbar-title">Ishaan</a>
            <div onClick={openMenu} className="nav-mob-open"><FontAwesomeIcon icon={faBars} /></div>
            <ul ref={menuRef} className="nav-menu">
                <div onClick={closeMenu} className="nav-mob-close"><FontAwesomeIcon icon={faXmark} /></div>
                <li>
                    <div className="border-gradient border-gradient-green">
                        <AnchorLink className="anchor-link" href="#home">Home</AnchorLink>
                    </div>
                </li>
                <li>
                    <div className="border-gradient border-gradient-green">
                        <AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink> 
                    </div>
                </li>
                <li>
                    <div className="border-gradient border-gradient-green">
                        <AnchorLink className="anchor-link" offset={50} href="#portfolio">Portfolio</AnchorLink> 
                    </div>
                </li>
                <li>
                    <div className="border-gradient border-gradient-green">
                        <AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink> 
                    </div>
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
            </div>
        </div>
     );
}
 
export default NavBar;