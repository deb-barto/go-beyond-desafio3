import React from "react";
import './background.css'
import Avatar from '../avatar/avatar.js'

function Container() {
 
    return (
          <div className="main-background">
              <div className="fundo"></div>
              <div className="avatar-position"><Avatar/></div>
          </div>
    );
  }
  
  export default Container;