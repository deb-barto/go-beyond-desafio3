import React from "react";
import './avatar.css'
import avatar from  '../img/dbs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"

function Avatar() {
 
    return (
          <div className="main-ava">
              <div className="image-ava">
                  <img src={avatar} className="image" alt="Avatar" />
                  <h1 className="name">Débora Bartosiaki</h1>
                  <h4 className="job">Front-end Developer</h4>
              </div>
              <div className="Midias">
                <a href="https://www.linkedin.com/in/debora-barto/" className="icon"> 
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <h3 className="midias"> Linkedin </h3>
                </a>
                <a href="https://www.instagram.com/debra_barto/" className="icon"> 
                    <FontAwesomeIcon icon={faInstagram}/>
                    <h3 className="midias"> Instragram </h3>
                </a>
                <a href="https://github.com/hana-bananaa" className="icon"> 
                    <FontAwesomeIcon icon={faGithub}/>
                    <h3 className="midias">Github</h3>
                </a>
              </div>
          </div>
    );
  }
  
  export default Avatar;