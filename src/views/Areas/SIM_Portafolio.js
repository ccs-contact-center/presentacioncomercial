import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import SIM from "../../assets/img//portafolios.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section centrado-fila" id="implementacion">
        <div className="content" style={{padding:'20px',}}>
       
          <Zoom>
            <h1>Servicios</h1>
          </Zoom>
          <Zoom>
            <p style={{marginBottom:'0px'}}>
              Grupo SIM tiene un portafolio de servicios diversificados, desde
              consultoría hasta reclutamiento, administración de nómina y
              servicios financieros de corto plazo para cubrir necesidades de
              tesorería.
            </p>
          </Zoom>
          <Zoom>
        
           <img
              src={SIM}
              width={750}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
          
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
