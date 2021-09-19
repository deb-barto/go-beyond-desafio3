import React from "react";
import './cards.css'


function CardGb() {
 
    return (
          <div className="cards-container">
              <div className="gb1 total">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="titlecard">Site Go Beyond - Loja </h3>
                     </a>
                 </div>
              </div>

              <div className="gb2 total">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="titlecard">Controle da Vendas </h3>
                    </a>
                </div>
              </div>
              <div className="gb3 total">
              <div className="imagem">
                 <a href="/" className="gb">
                     <h3 className="titlecard">Portfólio Pessoal</h3>
                 </a>
              </div>

              </div>
              <div className="gb4 total">
              <div className="imagem">
                 <a href="/" className="gb">
                     <h3 className="titlecard">Desafio Final</h3>
                 </a>
              </div> 
              </div>
        </div>
         
    );
  }
  
  export default CardGb;