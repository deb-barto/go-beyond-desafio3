import React from "react";
import './avatar.css'
import avatar from  '../img/dbs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
function Avatar() {
 
    return (
          <div className="main-ava">
              <div className="image-ava">
                  <img src={avatar} className="image" alt="Avatar" />
                  <h1 className="name">Débora Bartosiaki</h1>
                  <h4 className="job">Front-end Developer</h4>
              </div>
              <div className="Midias">
                <a href="/" className="icon"> 
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <h3 className="midias"> Linkedin </h3>
                </a>
                <a href="/" className="icon"> 
                    <FontAwesomeIcon icon={faInstagram}/>
                    <h3 className="midias"> Instragram </h3>
                </a>
                <a href="/" className="icon"> 
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <h3 className="midias"> Email</h3>
                </a>
              </div>
          </div>
    );
  }
  
  export default Avatar;