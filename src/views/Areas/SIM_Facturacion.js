import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import money from "../../assets/img/icons/money.png";
import people from "../../assets/img/icons/people.png";
import deloitte from "../../assets/img/partners/deloitte.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content">
          <h1>Datos Financieros</h1>
          <br />
          <p style={{ margin: "-1vw" }}>
            Durante los últimos 9 años, Grupo SIM ha logrado crecimientos de
            doble digito tanto en ingresos como en nómina mensual procesada
          </p>
          <div className="info-box">
            <Zoom down delay={750}>
              <div className="info-item" style={{ margin: "-1vw" }}>
                <h2>Nómina Procesada Mensualmente</h2>
              </div>
            </Zoom>
            <Zoom left>
              <div className="info-item" style={{ margin: "-1vw" }}>
                <h2>Ingreso Anual</h2>
              </div>
            </Zoom>
            <Zoom rigth delay={500}>
              <div
                className="info-item"
                style={{ margin: "-1vw", marginTop: "2vw" }}
              >
                <img
                  src={people}
                  width={320}
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </Zoom>
            <Zoom up delay={250}>
              <div
                className="info-item"
                style={{ margin: "-1vw", marginTop: "2vw" }}
              >
                <img src={money} width={350} alt="logo" className="img-fluid" />
              </div>
            </Zoom>
          </div>

          <Zoom>
            <br />
            <br />
            <p>Estados financieros auditados por:</p>
            <img
              src={deloitte}
              width={200}
              alt="logo"
              className="img-fluid"
              style={{ margin: "-2vw" }}
            />
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
