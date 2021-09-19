import React from "react";
import './cards.css'


function CardHc() {
 
 
    return (
        <div className="cards-container">
            <div className="hc1 total">
              <div className="imagem">
                  <a href="https://github.com/GabrielGui13/aws-vtex-17" className="gb">
                      <h3 className="titlecard"> Aws - VTEX.io</h3>
                   </a>
               </div>
            </div>

            <div className="hc2 total">
              <div className="imagem">
                  <a href="https://github.com/hana-bananaa/vtex-io-upmedal" className="gb">
                      <h3 className="titlecard"> Up Medal - VTEX.io </h3>
                  </a>
              </div>
            </div>
            <div className="hc3 total">
            <div className="imagem">
               <a href="https://mimir-e-commerce.vercel.app/" className="gb">
                   <h3 className="titlecard">Mimir E-commerce</h3>
               </a>
            </div>

            </div>
            <div className="hc4 total">
            <div className="imagem">
               <a href="https://clever-saha-6f5726.netlify.app/" className="gb">
                   <h3 className="titlecard">Dream Maker - Landing Page</h3>
               </a>
            </div> 
            </div>
      </div>
       
  );
}

  export default CardHc;