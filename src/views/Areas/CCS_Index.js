import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import CCS from "../../assets/img/brand/logo.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <Zoom>
            <img
              src={CCS}
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
            <p>Somos una empresa 100% mexicana fundada en 2003</p>
            <p>
              Nuestro equipo tiene más de 25 años de experiencia en la gestión
              de clientes o CRM. Nos especializamos en la implantación,
              operación, comercialización y optimización de Centros de Contacto
              para entregar una excelente experiencia a los clientes de nuestros
              clientes.
            </p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
