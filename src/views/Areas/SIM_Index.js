import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import SIM from "../../assets/img/brand/SIM_Transparente.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content">
          <Zoom>
            <h1>Grupo SIM</h1>
          </Zoom>
          <Zoom>
            <img
              src={SIM}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
          </Zoom>
          <br />
          <Zoom>
            <p>
              Fundado en el año 2004, somos la integración de un grupo de
              empresas 100% mexicanas especializadas en Capital Humano,
              ofrecemos soluciones a través de modelos de negocio, dirigidos a
              brindar servicios de calidad donde favorecemos el desarrollo
              comercial de nuestros clientes y somos reconocidos por nuestra
              calidad de servicios y certificados bajo la norma de calidad ISO
              9001:2001. Somos una compañía con presencia tanto en México y el
              Caribe. Con más de 250 clientes y más de 40,000 colaboradores.
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
