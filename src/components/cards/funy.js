import React from "react";
import './cards.css'


function CardJS() {
 
 
    return (
        <div className="cards-container">
            <div className="js1">
              <div className="imagem">
                  <a href="/" className="gb">
                      <h3 className="titlecard">Drum Rock</h3>
                   </a>
               </div>
            </div>

            <div className="js2">
              <div className="imagem">
                  <a href="/" className="gb">
                      <h3 className="titlecard">Let's Draw </h3>
                  </a>
              </div>
            </div>
            <div className="js3">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="titlecard">Quizz do Milhão</h3>
                    </a>
                </div>
            </div>

      </div>
       
  );
}

  export default CardJS;