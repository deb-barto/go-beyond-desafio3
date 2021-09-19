import React from "react";
import './cards.css'


function CardHc() {
 
 
    return (
        <div className="cards-container">
            <div className="hc1">
              <div className="imagem">
                  <a href="/" className="gb">
                      <h3 className="titlecard"> Aws - VTEX.io</h3>
                   </a>
               </div>
            </div>

            <div className="hc2">
              <div className="imagem">
                  <a href="/" className="gb">
                      <h3 className="titlecard"> Up Medal - VTEX.io </h3>
                  </a>
              </div>
            </div>
            <div className="hc3">
            <div className="imagem">
               <a href="/" className="gb">
                   <h3 className="titlecard">Mimir E-commerce</h3>
               </a>
            </div>

            </div>
            <div className="hc4">
            <div className="imagem">
               <a href="/" className="gb">
                   <h3 className="titlecard">Dream Maker - Landing Page</h3>
               </a>
            </div> 
            </div>
      </div>
       
  );
}

  export default CardHc;